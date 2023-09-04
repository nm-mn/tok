import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
interface Props {
    children: React.ReactNode;
}

export const RouteGuard = (props: Props) => {
    const navigate = useNavigate();
    const { authStatus } = useAuthenticator(context => [context.authStatus]);
    useEffect(() => {
        if (authStatus === "unauthenticated") {
            navigate("/login");
        }
    },[authStatus]);
    //TODO: consider "configuring" status.
    return <div>{props.children}</div>;
}