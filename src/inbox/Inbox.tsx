import React from "react";
import InboxList from "./InboxList"
import InboxContent from "./InboxContent";
import "../common/common.css"


const mock = {
    firstName: "Natalia",
    lastName: "Turcan"
}

const Inbox: React.FC = () => {
    return <div className="inbox">
        <InboxList />
        <InboxContent firstName={mock.firstName} lastName={mock.lastName} />
    </div>;
}

export default Inbox;