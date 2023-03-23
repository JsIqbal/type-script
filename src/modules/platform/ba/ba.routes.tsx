import { Row } from "react-bootstrap";
import { Footer } from "../../core";
import { Navigate } from "react-router-dom";
import Nav from "../../core/common/nav.component";

type BaRouteProps = {
    isBa: boolean;
    children: React.ReactNode;
};

const BaRoute: React.FC<BaRouteProps> = ({ isBa, children }) => {
    if (!isBa) {
        return <Navigate to="/" replace />;
    }
    return (
        <>
            <Nav />
            <div className="container">
                <Row className="w-2/3">{children}</Row>
            </div>
            <Footer />
        </>
    );
};

export default BaRoute;
