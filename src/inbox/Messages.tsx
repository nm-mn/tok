import { Dayjs } from "dayjs"
import { DAYJS_FORMAT } from "../constants/internal_common"
import MessageBubble from "./MessageBubble"
import dayjs from "dayjs";

interface Props {
    date: Dayjs;
}

const mocks = [
    {
        isSelf: false,
        isLast: false,
        datetime: dayjs(),
        message: "Try again"
    },
    {
        isSelf: false,
        isLast: true,
        datetime: dayjs(),
        message: "I’ll be in the subway Cause I’m starting a session with the audio lab project"
    },
    {
        isSelf: true,
        datetime: dayjs(),
        message: "environment : aws amplify\nfront end : React (with typescript)]backend : Nodejs\nAPI : graphQL"
    }]
const Messages: React.FC<Props> = ({ date }) => {
    return <div>
        <div className="messages__date">{date.format(DAYJS_FORMAT.mm_yy)}</div>
        <div>
            {mocks.map((mock) => (
                <MessageBubble datetime={mock.datetime} isSelf={mock.isSelf} message={mock.message} isLast={mock.isLast ?? false}/>
            ))
            }
        </div>
    </div>
}

export default Messages;