import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
    children: ReactElement;
}

function PrivateRoute({ children }: PrivateRouteProps): ReactElement {
    const loggedInUser = localStorage.getItem("access_token");
    if (loggedInUser) {
        return <Navigate to="/admin" replace />;
    }
    return children;
}

export default PrivateRoute;
