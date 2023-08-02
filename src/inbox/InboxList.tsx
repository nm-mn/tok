import React from "react";
import { MESSAGE } from "../constants/inbox"
import dayjs, { Dayjs } from "dayjs"
import InboxListItem from "./InboxListItem"
import './inbox.css';
import { useState, useEffect } from "react";
import { Inbox } from "../interfaces/common"
import { GraphQLQuery } from '@aws-amplify/api';
import { API } from 'aws-amplify';
import { ListChannelIdByProfileIdQuery } from "../interfaces/customAPI"
import { listChannelIdByProfileId } from "../customgraphql/custom_queries"

const mocks = [
    {
        id: "aaa1",
        status: "read",
        sender: "Natalia Turcan1",
        date: dayjs(),
        message: "Last message. Words words words words words words words words words words words words END",
        skills: [
            { value: "x", name: "oil painting" },
            { value: "x", name: "watercolor" },
            { value: "x", name: "lyrical abstraction" }
        ]
    },
    {
        id: "aaa2",
        status: "read",
        sender: "Natalia Turcan2",
        date: dayjs(),
        message: "Last message. Words words words words words words words words words words words words END",
        skills: [
            { value: "x", name: "oil painting" },
            { value: "x", name: "watercolor" },
            { value: "x", name: "lyrical abstraction" }
        ]
    },
    {
        id: "aaa3",
        status: "read",
        sender: "Natalia Turcan3",
        date: dayjs(),
        message: "Last message. Words words words words words words words words words words words words END",
        skills: [
            { value: "x", name: "oil painting" },
            { value: "x", name: "watercolor" },
            { value: "x", name: "lyrical abstraction" }
        ]
    },
    {
        id: "aaa",
        status: "read",
        sender: "Natalia Turcan",
        date: dayjs(),
        message: "Last message. Words words words words words words words words words words words words END",
        skills: [
            { value: "x", name: "oil painting" },
            { value: "x", name: "watercolor" },
            { value: "x", name: "lyrical abstraction" }
        ]
    },
    {
        id: "bb",
        status: "unread",
        sender: "Paul Bincovski",
        date: dayjs(),
        message: "Last message. Words words words words words words words words words words words words END",
        skills: [
            { value: "x", name: "oil painting" },
            { value: "x", name: "watercolor" },
            { value: "x", name: "lyrical abstraction" }
        ]
    },
    {
        id: "cc",
        status: "selected",
        sender: "First Last",
        date: dayjs(),
        message: "Last message. Words words words words words words words words words words words words END",
        skills: [
            { value: "x", name: "oil painting" },
            { value: "x", name: "watercolor" },
            { value: "x", name: "lyrical abstraction" }
        ]
    },
    {
        id: "dd",
        status: "unread",
        sender: "Cezara Kolesnik",
        date: dayjs(),
        message: "Last message. Words words words words words words words words words words words words END",
        skills: [
            { value: "x", name: "oil painting" },
            { value: "x", name: "watercolor" },
            { value: "x", name: "lyrical abstraction" }
        ]
    }
]
const validateInboxListResponse = (response: any) => {
    if (response.data == undefined ||
        response.data.channelProfilesByProfileId == undefined ||
        response.data.channelProfilesByProfileId.items == undefined) {
        return false;
    }
    // TODO: add more detailed validation
    return true;
}

const classifyStatus = (readDate: Dayjs, latestMessageDate: Dayjs, latestSender: string, owner: string) => {
    if (latestSender == owner) {
        console.log("read");
        console.log(latestSender)
        return "read";
    } else {
        console.log("hello");
        console.log(readDate.format("YYYY/MM/DD hh:mm"))
        console.log(latestMessageDate.format("YYYY/MM/DD hh:mm"))

        return readDate.isBefore(latestMessageDate) ? "unread" : "read";
    }
}
const InboxList: React.FC = ({ }) => {
    const myProfileId = "f610046a-45f1-469e-a482-04c497a5502a";
    const [result, setResult] = useState({ inbox: [] as Inbox[], errorMessage: "" });
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let ignore = false;
        setIsLoading(true);
        const fetchInbox = async () => {
            try {
                const json = await API.graphql<GraphQLQuery<ListChannelIdByProfileIdQuery>>({
                    query: listChannelIdByProfileId,
                    variables: {
                        profileId: myProfileId
                    }
                })
                if (!ignore) {
                    setIsLoading(false);
                    if (validateInboxListResponse(json)) {
                        const convertedInboxList = json.data.channelProfilesByProfileId.items
                            .map((item) => ({
                                id: item.channelChannel_id ?? "",
                                status: classifyStatus(
                                    dayjs(item.channel.readStatus.items[0].date ?? ""),
                                    dayjs(item.channel.messages.items[0].date),
                                    item.channel.messages.items[0].profile_id ?? "",
                                    myProfileId),
                                sender: `${item.channel.profiles.items[0].profile.first_name} ${item.channel.profiles.items[0].profile.last_name}`,
                                date: dayjs(item.channel.messages.items[0].date),
                                message: item.channel.messages.items[0].message,
                                skills: [] // TODO
                            }))
                        setResult({ inbox: convertedInboxList, errorMessage: "" });
                    } else {
                        // TODO: improve error message
                        setResult({ inbox: [], errorMessage: "Invalid Response" });
                    }
                }

            } catch (e) {
                console.log(e);
                // TODO: improve error message
                setResult({ inbox: [], errorMessage: "API error" })
            }
        }
        fetchInbox();
        // cleanup functionn
        return () => {
            ignore = true
        }
    }, [query])

    if (result.inbox.length > 0) {
        return <div className="inbox-list">
            <div className="inbox__header inbox-list__header">{MESSAGE.list_title}</div>
            <div className="inbox-list__container">
                {
                    result.inbox.map((mock_value) => (
                        <InboxListItem
                            key={mock_value.id}
                            id={mock_value.id}
                            status={mock_value.status}
                            sender={mock_value.sender}
                            date={mock_value.date}
                            message={mock_value.message}
                            skills={mock_value.skills}
                        />
                    ))

                }
            </div>
        </div>;
    } else {
        // TODO : improve no Message view
        return <div>No Messages</div>;
    }
}

export default InboxList;