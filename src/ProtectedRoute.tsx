import React from "react";
import { Navigate } from 'react-router-dom';
import { useContext } from 'react'
import { AuthenticatedContext } from "./App"

interface Props {
    children: React.ReactNode;
}

const ProtectedRoute = (props: Props) => {
    const authContext = useContext(AuthenticatedContext);
    const isAuthenticated = authContext.isAuthenticated;
    if (!isAuthenticated) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/login" />
    }

    // authorized so return child componenSts
    return <div>{props.children}</div>;
}

export default ProtectedRoute;