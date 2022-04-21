import React from "react";
import { Navigate } from "react-router-dom";
function GuestMiddleware({ auth, children }) {
    if (auth) {
        return <Navigate to="/" />;
    }
    return children;
}

export default GuestMiddleware;
