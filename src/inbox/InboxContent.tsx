import Avatar from "@mui/material/Avatar"
import TextareaAutosize from '@mui/base/TextareaAutosize';
import SendIcon from '@mui/icons-material/Send';
import Messages from "./Messages"
import "./inbox.css";
import dayjs from "dayjs";
interface Props {
    firstName: string;
    lastName: string;
}

const mock = {
    date: dayjs()
}
const InboxContent: React.FC<Props> = ({ firstName, lastName }) => {
    return <div className="inbox-content">
        <div className="inbox__header inbox-content__header">
            <Avatar sx={{ width: '56px', height: '56px' }} />
            <div className="inbox-content__header-name"><span className="inbox-content__header-first-name">{firstName}</span><span>{lastName}</span></div>
        </div>
        <div className="inbox-content__body"><Messages date={mock.date}/></div>
        <div className="inbox-content__footer">
            <TextareaAutosize className="inbox-content__textarea" minRows={1} maxRows={5} />
            <SendIcon color="primary" sx={{ width: '28px', height: '28px', m: "8px" }} />
        </div>
    </div>
}

export default InboxContent;