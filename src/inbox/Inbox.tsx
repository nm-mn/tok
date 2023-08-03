import React, { useState } from "react";
import InboxList from "./InboxList"
import InboxContent from "./InboxContent";
import "../common/common.css"

const Inbox: React.FC = () => {
    const [channelIdSelected, setChannelIdSelected] = useState("")

    const selectChannel = (id: string) => {
        setChannelIdSelected(id);
    }
    return <div className="inbox">
        <InboxList onSelectChannel={selectChannel} channelIdSelected={channelIdSelected}/>
        <InboxContent channelId={channelIdSelected} profileId={""} />
    </div>;
}

export default Inbox;