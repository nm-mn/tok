import Avatar from "@mui/material/Avatar";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import Messages from "./Messages";
import "./inbox.css";
import dayjs from "dayjs";
import { useState, useEffect, useContext, useRef } from "react";
import { GraphQLQuery, GraphQLSubscription } from "@aws-amplify/api";
import {
  ByChannelAndDateQuery,
  CreateMessageMutation,
  OnCreateMessageSubscription,
} from "../API";
import { onCreateMessage } from "../graphql/subscriptions";
import { API, graphqlOperation } from "aws-amplify";
import { byChannelAndDate } from "../graphql/queries";
import { createMessage } from "../graphql/mutations";
import { DAYJS_FORMAT, LOCALSTORAGE_KEY } from "../constants/internal_common";
interface Props {
  channelId: string;
  profileId: string;
}

const InboxContent: React.FC<Props> = ({ channelId = "", profileId = "" }) => {
  const myProfileId = localStorage.getItem(LOCALSTORAGE_KEY.myProfileId)
  const [result, setResult] = useState({
    messages: [],
    profile: { firstName: "", lastName: "" },
    errorMessage: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (channelId == "") {
      return;
    }
    let ignore = false;
    setIsLoading(true);
    let unsubscribe: any;

    const fetchInbox = async () => {
      try {
        if (!ignore) {
          setIsLoading(false);
          const json = await API.graphql<GraphQLQuery<ByChannelAndDateQuery>>({
            query: byChannelAndDate,
            variables: {
              channel_id: channelId,
              sortDirection: "ASC",
            },
          });
          const subscribed = API.graphql<GraphQLSubscription<OnCreateMessageSubscription>>({
            query: onCreateMessage, variables: {
              filter: {
                channel_id: { eq: channelId }
              }
            }
          })
            .subscribe({
              next: ({ provider, value }) => {
                const currentMessages = result.messages;
                const newMessage = value.data.onCreateMessage;
                currentMessages.push({
                  isSelf: newMessage.profile_id == myProfileId,
                  message: newMessage.message,
                  datetime: dayjs(newMessage.date),
                  isLast: true, //TODO: proper evaluation of isLast
                })
                setResult({...result, messages: currentMessages})
              },
              error: (error) => console.log(error)
            })
          unsubscribe = () => {
            subscribed.unsubscribe();
          }

          if (validateMessagesResponse(json)) {
            const rawMessages = json.data.byChannelAndDate.items;
            const totalMessages = rawMessages.length;
            let nextSender = "";
            const messages = [];
            for (let i = 0; i < totalMessages; i++) {
              nextSender =
                i + 1 < totalMessages ? rawMessages[i + 1].profile_id : "";
              const rawMessage = rawMessages[i];
              messages.push({
                isSelf: rawMessage.profile_id == myProfileId,
                message: rawMessage.message,
                datetime: dayjs(rawMessage.date),
                isLast: rawMessage.profile_id != nextSender,
              });
            }
            setResult({
              messages,
              profile: result.profile,
              errorMessage: "Invalid Response",
            });
            //     // TODO: add a detailed validation to
            //     const convertedInboxList = json.data.channelProfilesByProfileId.items
            //         .map((item) => ({
            //             id: item.channelChannel_id,
            //             status: classifyStatus(
            //                 dayjs(item.channel.readStatus.items[0].date || ""),
            //                 dayjs(item.channel.messages.items[0].date || ""),
            //                 item.channel.messages.items[0].profile_id || "",
            //                 myProfileId),
            //             sender: `${item.channel.profiles.items[0].profile.first_name} ${item.channel.profiles.items[0].profile.last_name}`,
            //             date: dayjs(item.channel.messages.items[0].date || ""),
            //             message: item.channel.messages.items[0].message || "",
            //             skills: []
            //         }))
            //     setResult({ inbox: convertedInboxList, errorMessage: "" });
          } else {
            console.log("error");
            // TODO: improve error message
            setResult({
              messages: [],
              profile: { firstName: "", lastName: "" },
              errorMessage: "Invalid Response",
            });
          }
        }
      } catch (e) {
        console.log(e);
        // TODO: improve error message
        setResult({
          messages: [],
          profile: result.profile,
          errorMessage: "get message API error",
        });
        setIsLoading(false);
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
  }, [channelId]);

  const sendMessage = async () => {
    try {
      await API.graphql<GraphQLQuery<CreateMessageMutation>>({
        query: createMessage,
        variables: {
          input: {
            channel_id: channelId,
            date: dayjs().format(DAYJS_FORMAT.full_day),
            message: value,
            profile_id: myProfileId,
          },
        },
      });
      setValue("");
    } catch (error) {
      // TODO: show error message
      console.log(error);
    }
  };
  if (!isLoading && channelId.length == 0) {
    return <div className="inbox-content">select message </div>;
  } else {
    return (
      <div className="inbox-content">
        <div className="inbox__header inbox-content__header">
          <Avatar sx={{ width: "56px", height: "56px" }} />
          <div className="inbox-content__header-name">
            <span className="inbox-content__header-first-name">
              {result.profile.firstName}
            </span>
            <span>{result.profile.lastName}</span>
          </div>
        </div>

        {
          // TODO: improve css of loading spinner and select message
          isLoading ? (
            <div>Loading Spinner</div>
          ) : (
            <div className="inbox-content__body">
              <Messages messages={result.messages} />
            </div>
          )
        }
        <div className="inbox-content__footer">
          <TextareaAutosize
            className="inbox-content__textarea"
            minRows={1}
            maxRows={5}
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
            }}
            onKeyDown={(e) => {
              if (
                (e.key === "Enter" && !e.shiftKey) ||
                (e.key === "Enter" && !e.ctrlKey)
              ) {
                e.preventDefault();
                sendMessage();
              }
            }}
          />
          <IconButton
            sx={{ padding: "0px", m: "8px" }}
            disabled={value.length == 0}
            onClick={() => {
              sendMessage();
            }}
            color="primary"
          >
            <SendIcon sx={{ width: "28px", height: "28px" }} />
          </IconButton>
        </div>
      </div>
    );
  }
};

export default InboxContent;

// *** helper methods ***//
const validateMessagesResponse = (response: any) => {
  if (
    response.data == undefined ||
    response.data.byChannelAndDate == undefined ||
    response.data.byChannelAndDate.items == undefined
  ) {
    return false;
  }
  // TODO: add more detailed validation
  return true;
};
