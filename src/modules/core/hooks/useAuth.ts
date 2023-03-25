import { useState, useEffect } from "react";

import { userActions } from "../../platform";

const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isBa, setIsBa] = useState(false);

    useEffect(() => {
        userActions.handleUserType(setIsLoggedIn, setIsBa, setIsAdmin);
    }, []);

    return { isLoggedIn, isAdmin, isBa };
};

export { useAuth };
// this method seemed to be a lot slower when used.
