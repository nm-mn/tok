import { Dayjs } from "dayjs"
import { DAYJS_FORMAT } from "../constants/internal_common"
import MessageBubble from "./MessageBubble"
import dayjs from "dayjs";
import { Message } from "../interfaces/common";
import uuid from "react-uuid";

interface Props {
    messages: Message[]
}

const Messages: React.FC<Props> = ({ messages = [] }) => {
    return <div>
        {/* <div className="messages__date">{date.format(DAYJS_FORMAT.mm_yy)}</div> */}
        <div>
            {messages.map((message) => (
                <MessageBubble key={uuid()} datetime={message.datetime} isSelf={message.isSelf} message={message.message} isLast={message.isLast ?? false} />
            ))
            }
        </div>
    </div>
}

export default Messages;