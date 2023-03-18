import React from "react";
import { Navigate } from "react-router-dom";

type PublicRouteProps = {
    children: React.ReactNode;
};

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
    const loggedInUser = localStorage.getItem("userType");

    if (loggedInUser === "Admin" || loggedInUser === "BA") {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};

export default PublicRoute;
