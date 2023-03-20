import { useEffect, useState } from "react";

export const useNavHook = () => {
    const [isTop, setIsTop] = useState(true);

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
    return navbarClasses;
};
