import { Navbar } from "react-bootstrap";
import { useState, useEffect } from "react";
import Button from "../../../core/common/button.component";
import Typography from "../../../core/common/typography.component";
import { logout } from "../../../core/svg/all.svg";

const Nav: React.FC = () => {
    const [isTop, setIsTop] = useState(true);
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const top = window.scrollY < 60;
            if (top !== isTop) {
                setIsTop(top);
            }
        });
    }, [isTop]);

    const navbarClasses = isTop
        ? "mx-auto max-w-screen-4xl py-2 px-4 lg:px-8 lg:py-4 text-white navbar-transition"
        : "mx-auto max-w-screen-4xl py-2 px-4 lg:px-8 lg:py-4 text-white fixed-top navbar-transition";

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
