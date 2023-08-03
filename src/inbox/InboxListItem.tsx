import React from "react";
import { Dayjs } from "dayjs";
import './inbox.css';
import { Label, Inbox } from "../interfaces/common"
import Avatar from "@mui/material/Avatar";
import { DAYJS_FORMAT } from "../constants/internal_common"

interface Props extends Inbox {
    onSelectChannel: (id: string) => void
}
const InboxListItem: React.FC<Props> = ({ onSelectChannel, id, status, sender, date, message, skills }) => {
    let classNameForContainer = "inbox-list-item";
    switch (status) {
        case "unread":
            classNameForContainer += " inbox-list-item__unread";
            break;
        case "selected":
            classNameForContainer += " inbox-list-item__selected";
            break;
        case "read":
            break;
        default:
            console.error("unrecognized status in InboxListItem.tsx");
    }
    return <div className={classNameForContainer} onClick={() => onSelectChannel(id)}>
        <div className="inbox-list-item__avatar-container">
            <Avatar sx={{ width: '80px', height: '80px' }} />
        </div>
        <div>
            <div className="inbox-list-item__header">
                <div>{sender}</div>
                <div>{date.format(DAYJS_FORMAT.mm_yy)}</div>
            </div>
            <div className="inbox-list-item__content">{message}</div>
            <div className="inbox-list-item__footer">{skills.map((skill, index) => (skill.name + (index ? ', ' : '')))}</div>
        </div>
    </div>;
}

export default InboxListItem;