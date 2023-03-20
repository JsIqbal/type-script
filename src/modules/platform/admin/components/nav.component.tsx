import { Navbar } from "react-bootstrap";
import Button from "../../../core/common/button.component";
import Typography from "../../../core/common/typography.component";
import { logout } from "../../../core/svg/all.svg";
import { useNavHook } from "./hooks/useNavHook";

const Nav: React.FC = () => {
    const navbarClasses = useNavHook();

    return (
        <Navbar bg="dark" variant="dark" className={navbarClasses}>
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography className="typo-graphy" element={"QIKCHECK"} />
                <Button
                    className="bg-dark border-0 text-danger"
                    event={() => {
                        localStorage.clear();
                        window.location.href = "/";
                    }}
                    element={logout}
                />
            </div>
        </Navbar>
    );
};

export default Nav;
