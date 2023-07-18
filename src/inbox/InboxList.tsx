import React from "react";
import { MESSAGE } from "../constants/inbox"
import dayjs from "dayjs"
import InboxListItem from "./InboxListItem"
import './inbox.css';


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

const InboxList: React.FC = ({ }) => {
    return <div className="inbox-list">
        <div className="inbox__header inbox-list__header">{MESSAGE.list_title}</div>
        <div className="inbox-list__container">
            {
                mocks.map((mock_value) => (
                    <InboxListItem
                        key={mock_value.id}
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
}

export default InboxList;