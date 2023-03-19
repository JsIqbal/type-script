import { Navbar } from "react-bootstrap";
import { useState, useEffect } from "react";
import Button from "../../../core/common/button.component";
import Typography from "../../../core/common/typography.component";

const Nav: React.FC = () => {
    const [isTop, setIsTop] = useState(true);
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const top = window.scrollY < 100;
            if (top !== isTop) {
                setIsTop(top);
            }
        });
    }, [isTop]);

    const navbarClasses = isTop
        ? "mx-auto max-w-screen-4xl py-2 px-4 lg:px-8 lg:py-4 text-white"
        : "mx-auto max-w-screen-4xl py-2 px-4 lg:px-8 lg:py-4 text-white fixed-top";

    return (
        <Navbar bg="dark" variant="dark" className={navbarClasses}>
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography className="typo-graphy" element={"QIKCHECK"} />
                <Button
                    event={() => {
                        localStorage.clear();
                        window.location.href = "/";
                    }}
                    element={"Logout"}
                />
            </div>
        </Navbar>
    );
};

export default Nav;
