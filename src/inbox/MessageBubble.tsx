import { Avatar } from "@mui/material"
import { Dayjs } from "dayjs"

interface Props {
    datetime: Dayjs
    isSelf: boolean
    message: string
    isLast?: boolean
}

const MessageBubble: React.FC<Props> = ({ datetime, isSelf, isLast, message }) => {
    if (isSelf) {
        return <div className="message-bubble__container-self">
            <div className="message-bubble__common message-bubble__self" >
                {message}
            </div>
        </div>
    } else {
        return <div className="message-bubble__container-other">
            <Avatar sx={{ width: '32px', height: '32px', opacity: isLast ? 1 : 0 }} />
            <div className="message-bubble__common message-bubble__other">{message}</div>
        </div>
    }
}

export default MessageBubble;