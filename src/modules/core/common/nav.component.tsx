import { Navbar } from "react-bootstrap";
import { ModButton, Typography, svgIcon } from "..";
import { useNavHook } from "../../platform/admin/hooks/useNavHook";
import { useNavigate } from "react-router-dom";
import BaProfile from "../../platform/ba/components/profile.component";
import { user } from "../index";

const Nav: React.FC = () => {
    const navbarClasses = useNavHook();
    const navigate = useNavigate();

    return (
        <Navbar bg="dark" variant="dark" className={navbarClasses}>
            <div className="container mx-auto d-flex align-items-center justify-content-between text-blue-gray-900">
                <Typography
                    event={() => {
                        navigate("/");
                    }}
                    className="typo-graphy logo-text"
                    element={"QIK-CHECK"}
                />
                <div className="d-flex align-items-center">
                    {user.type === "BA" && <BaProfile />}
                    <ModButton
                        className="bg-dark border-0 text-danger"
                        event={() => {
                            localStorage.clear();
                            window.location.href = "/";
                        }}
                        element={svgIcon.logout}
                    />
                </div>
            </div>
        </Navbar>
    );
};

export default Nav;
