import Avatar from "@mui/material/Avatar"
import TextareaAutosize from '@mui/base/TextareaAutosize';
import SendIcon from '@mui/icons-material/Send';
import Messages from "./Messages"
import "./inbox.css";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { GraphQLQuery } from "@aws-amplify/api";
import { ByChannelAndDateQuery } from "../API"
import { API } from "aws-amplify";
import { byChannelAndDate } from "../graphql/queries"

interface Props {
    channelId: string
    profileId: string
}

const mock = {
    date: dayjs()
}


const InboxContent: React.FC<Props> = ({ channelId = "", profileId = "" }) => {
    // TODO: replace this with global state
    const myProfileId = "f610046a-45f1-469e-a482-04c497a5502a";

    const [result, setResult] = useState({
        messages: [],
        profile: { firstName: "", lastName: "" },
        errorMessage: ""
    })
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (channelId == "") {
            return;
        }
        let ignore = false;
        setIsLoading(true);
        const fetchInbox = async () => {
            try {
                const json = await API.graphql<GraphQLQuery<ByChannelAndDateQuery>>({
                    query: byChannelAndDate,
                    variables: {
                        channel_id: channelId,
                        sortDirection: "ASC"
                    }
                })
                if (!ignore) {
                    setIsLoading(false);
                    if (validateMessagesResponse(json)) {
                        const rawMessages = json.data.byChannelAndDate.items;
                        const totalMessages = rawMessages.length;
                        let nextSender = ""
                        const messages = [];
                        for (let i = 0; i < totalMessages; i++) {
                            nextSender = ((i + 1) < totalMessages) ? rawMessages[i + 1].profile_id : "";
                            const rawMessage = rawMessages[i];
                            messages.push({
                                isSelf: rawMessage.profile_id == myProfileId,
                                message: rawMessage.message,
                                datetime: dayjs(rawMessage.date),
                                isLast: rawMessage.profile_id != nextSender
                            })
                        }
                        setResult({ messages, profile: result.profile, errorMessage: "Invalid Response" });
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
                        console.log("error")
                        // TODO: improve error message
                        setResult({ messages: [], profile: { firstName: "", lastName: "" }, errorMessage: "Invalid Response" });
                    }
                }
            } catch (e) {
                console.log(e);
                // TODO: improve error message
                setResult({ messages: [], profile: result.profile, errorMessage: "get message API error" })
                setIsLoading(false);

            }
        }
        fetchInbox();
        // cleanup functionn
        return () => {
            ignore = true
        }
    }, [channelId])


    if (!isLoading && channelId.length == 0) {
        return <div className="inbox-content">select message </div>;
    } else {
        return <div className="inbox-content">
            <div className="inbox__header inbox-content__header">
                <Avatar sx={{ width: '56px', height: '56px' }} />
                <div className="inbox-content__header-name">
                    <span className="inbox-content__header-first-name">{result.profile.firstName}</span><span>{result.profile.lastName}</span>
                </div>
            </div>

            {
                // TODO: improve css of loading spinner and select message 
                isLoading ? <div>Loading Spinner</div> :
                    <div className="inbox-content__body"><Messages messages={result.messages} /></div>
            }

            <div className="inbox-content__footer">
                <TextareaAutosize className="inbox-content__textarea" minRows={1} maxRows={5} />
                <SendIcon color="primary" sx={{ width: '28px', height: '28px', m: "8px" }} />
            </div>
        </div>
    }

}

export default InboxContent;


// *** helper methods ***//
const validateMessagesResponse = (response: any) => {
    if (response.data == undefined ||
        response.data.byChannelAndDate == undefined ||
        response.data.byChannelAndDate.items == undefined) {
        return false;
    }
    // TODO: add more detailed validation
    return true;
}