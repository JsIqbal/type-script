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

// import { Navigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const AdminRoute = ({ isAdmin, children }) => {
//     if (!isAdmin) {
//         toast.error("You are not an ADMIN!", { toastId: "success1" });
//         return <Navigate to="/" replace />;
//     }
//     return children;
// };
// export default AdminRoute;
