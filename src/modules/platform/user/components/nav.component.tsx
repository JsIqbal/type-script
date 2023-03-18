import { Navbar } from "react-bootstrap";
import { useState, useEffect } from "react";

import Button from "../../../core/common/button.component";
import Typography from "../../../core/common/typography.component";

const Nav: React.FC = () => {
    const [openNav, setOpenNav] = useState(false);
    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    return (
        <Navbar className="mx-auto max-w-screen-4xl py-2 px-4 lg:px-8 lg:py-4">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography element={"QIKCHECK"} />
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
