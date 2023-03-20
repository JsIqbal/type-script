// import { useEffect, useState } from "react";

// export const useHandleUser = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [isAdmin, setIsAdmin] = useState(false);
//     const [isBa, setIsBa] = useState(false);
//     const admin: any = "Admin";
//     const ba: any = "BA";
//     const none: any = "None";

//     useEffect(() => {
//         if (localStorage.getItem("access")) {
//             setIsLoggedIn(true);
//             if (localStorage.getItem("userType") === "BA") {
//                 setIsBa(true);
//                 setIsAdmin(false);
//             }

//             if (localStorage.getItem("userType") === "Admin") {
//                 setIsBa(false);
//                 setIsAdmin(true);
//             }
//             if (isLoggedIn && isAdmin && !isBa) return admin;
//             if (isLoggedIn && !isAdmin && isBa) return ba;
//             if (!isLoggedIn && !isAdmin && !isBa) return none;
//         }
//     }, []);
// };
export {};
