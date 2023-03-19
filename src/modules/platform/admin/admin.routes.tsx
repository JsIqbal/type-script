import { Navigate } from "react-router-dom";

type AdminRouteProps = {
    isAdmin: boolean;
    children: React.ReactNode;
};

const AdminRoute: React.FC<AdminRouteProps> = ({ isAdmin, children }) => {
    if (!isAdmin) {
        return <Navigate to="/" replace />;
    }
    return <>{children}</>;
};

export default AdminRoute;
