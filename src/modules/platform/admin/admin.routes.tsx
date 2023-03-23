import { Footer } from "../../core";
import { Navigate } from "react-router-dom";
import Nav from "../../core/common/nav.component";

type AdminRouteProps = {
    isAdmin: boolean;
    children: React.ReactNode;
};

const AdminRoute: React.FC<AdminRouteProps> = ({ isAdmin, children }) => {
    if (!isAdmin) {
        return <Navigate to="/" replace />;
    }
    return (
        <>
            <Nav />
            <div className="container">{children}</div>
            <Footer />
        </>
    );
};

export default AdminRoute;
