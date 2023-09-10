import React, { useState, useEffect, useContext } from "react";
import { MESSAGE } from "../constants/inbox";
import dayjs, { Dayjs } from "dayjs";
import InboxListItem from "./InboxListItem";
import "./inbox.css";
import { Inbox } from "../interfaces/common";
import { graphqlOperation, GraphQLQuery, GraphQLSubscription } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { ListChannelIdByProfileIdQuery } from "../interfaces/customAPI";
import { listChannelIdByProfileId } from "../customgraphql/custom_queries";
import { onCreateMessage } from "../graphql/subscriptions"
import { LOCALSTORAGE_KEY } from "../constants/internal_common";
import { OnCreateMessageSubscription } from "../API"
import { Observable } from "zen-observable-ts";

interface Props {
  onSelectChannel: (id: string) => void;
  channelIdSelected: string;
}
const InboxList: React.FC<Props> = ({ onSelectChannel, channelIdSelected }) => {
  const myProfileId = localStorage.getItem(LOCALSTORAGE_KEY.myProfileId);
  const [result, setResult] = useState({
    inbox: [] as Inbox[],
    errorMessage: "",
    isLoading: false
  });
  const [query, setQuery] = useState("");

  useEffect(() => {
    let ignore = false;
    let unsubscribe: any;
    const fetchInbox = async () => {
      try {
        if (!ignore) {
          setResult({ inbox: result.inbox, errorMessage: "", isLoading: true });
          // get current data
          const json = await API.graphql<
            GraphQLQuery<ListChannelIdByProfileIdQuery>
          >({
            query: listChannelIdByProfileId,
            variables: {
              profileId: myProfileId,
            },
          });
          console.log(channelIdSelected);
          // const subscribed = API.graphql<GraphQLSubscription<OnCreateMessageSubscription>>({
          //   query: onCreateMessage, variables: {
          //     filter: {
          //       channel_id: { eq: channelIdSelected }
          //     }
          //   }
          // })
          //   .subscribe({
          //     next: ({ provider, value }) => { console.log({ provider, value }) },
          //     error: (error) => console.log(error)
          //   })
          // unsubscribe = () => {
          //   subscribed.unsubscribe();
          // }
          if (validateInboxListResponse(json)) {
            // TODO: add a detailed validation to
            const convertedInboxList =
              json.data.channelProfilesByProfileId.items.map((item) => ({
                id: item.channelChannel_id,
                status: classifyReadStatus(
                  dayjs(item.channel.readStatus.items[0].date || ""),
                  dayjs(item.channel.messages.items[0].date || ""),
                  item.channel.messages.items[0].profile_id || "",
                  myProfileId
                ),
                readStatusId: item.channel.readStatus.items[0].id || "",
                sender: `${item.channel.profiles.items[0].profile.first_name} ${item.channel.profiles.items[0].profile.last_name}`,
                date: dayjs(item.channel.messages.items[0].date || ""),
                message: item.channel.messages.items[0].message || "",
                skills: [],
              }));
            setResult({ inbox: convertedInboxList, errorMessage: "", isLoading: false });
          } else {
            console.log("error");
            // TODO: improve error message
            setResult({ inbox: [], errorMessage: "Invalid Response", isLoading: false });
          }
        }
      } catch (e) {
        console.log(e);
        // TODO: improve error message
        setResult({ inbox: [], errorMessage: "API error", isLoading: false });
      }
    };
    fetchInbox();
    // cleanup functionn
    return () => {
      ignore = true;
      if (typeof unsubscribe == "function") {
        unsubscribe()
      }
    };
  }, [query]);

  if (result.isLoading) {
    // TODO: add loading spinner
    return <div>Loading</div>;
  } else if (result.inbox.length > 0) {
    return (
      <div className="inbox-list">
        <div className="inbox__header inbox-list__header">
          {MESSAGE.list_title}
        </div>
        <div className="inbox-list__container">
          {result.inbox.map((channel) => (
            <InboxListItem
              key={channel.id}
              id={channel.id}
              // evaluation of selected is left outside of classifyReadStatus
              // to make it reactive to the channelIdSelected props
              status={
                channel.id == channelIdSelected ? "selected" : channel.status
              }
              readStatusId={channel.readStatusId}
              sender={channel.sender}
              date={channel.date}
              message={channel.message}
              skills={channel.skills}
              onSelectChannel={onSelectChannel}
            />
          ))}
        </div>
      </div>
    );
  } else {
    // TODO : improve no Message view
    return <div>No Messages</div>;
  }
};

export default InboxList;

const validateInboxListResponse = (response: any) => {
  if (
    response.data == undefined ||
    response.data.channelProfilesByProfileId == undefined ||
    response.data.channelProfilesByProfileId.items == undefined
  ) {
    return false;
  }
  // TODO: add more detailed validation
  return true;
};

const classifyReadStatus = (
  readDate: Dayjs,
  latestMessageDate: Dayjs,
  latestSender: string,
  owner: string
) => {
  if (latestSender == owner) {
    return "read";
  } else {
    // TODO: once subscribe is fixed, uncomment
    return "read";
    // return readDate.isBefore(latestMessageDate) ? "unread" : "read";
  }
};
