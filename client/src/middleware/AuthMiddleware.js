import React from "react";
import { Navigate } from "react-router-dom";
function AuthMiddleware({ auth, children }) {
    if (!auth) {
        return <Navigate to="/login" />;
    }
    return children;
}

export default AuthMiddleware;
