import { Navbar } from "react-bootstrap";

import { ModButton, Typography, svgIcon } from "..";
import { useNavHook } from "../../platform/admin/hooks/useNavHook";
import { useNavigate } from "react-router-dom";

const Nav: React.FC = () => {
    const navbarClasses = useNavHook();
    const navigate = useNavigate();

    return (
        <Navbar bg="dark" variant="dark" className={navbarClasses}>
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    event={() => {
                        navigate("/");
                    }}
                    className="typo-graphy logo-text"
                    element={"QIKCHECK"}
                />
                <ModButton
                    className="bg-dark border-0 text-danger"
                    event={() => {
                        localStorage.clear();
                        window.location.href = "/";
                    }}
                    element={svgIcon.logout}
                />
            </div>
        </Navbar>
    );
};

export default Nav;
