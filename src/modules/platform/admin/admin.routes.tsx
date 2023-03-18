import { Navigate } from "react-router-dom";
// import { toast } from "react-toastify";

type AdminRouteProps = {
    isAdmin: boolean;
    children: React.ReactNode;
};

const AdminRoute: React.FC<AdminRouteProps> = ({ isAdmin, children }) => {
    if (!isAdmin) {
        // toast.error("You are not an ADMIN!", { toastId: "success1" });
        return <Navigate to="/" replace />;
    }
    return <>{children}</>;
};

export default AdminRoute;
