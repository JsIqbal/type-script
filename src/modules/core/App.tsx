// import { useEffect, useState } from "react";
// import { Routes, Route, Navigate, Outlet } from "react-router-dom";
// import { ToastContainer } from "react-toastify";

// import {
//     Login,
//     userActions,
//     AdminDashboard,
//     AdminRoute,
//     BaRoute,
//     BaDashboard,
//     SubmitOtpForm,
//     QuestionForm,
// } from "../platform";
// import { PublicRoute } from "./";
// import DigitalSignature from "./digital";
// import SecondarySurvey from "../platform/ba/components/secondary-survey.component";
// import Reward from "../platform/ba/components/reward.component";
// import Loader from "./common/loader.component";

// export default function App() {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [isAdmin, setIsAdmin] = useState(false);
//     const [isBa, setIsBa] = useState(false);

//     useEffect(() => {
//         userActions.handleUserType(setIsLoggedIn, setIsBa, setIsAdmin);
//     }, []);

//     return (
//         <Loader>
//             <Routes>
//                 {isLoggedIn && !isBa && isAdmin && (
//                     <Route
//                         path="/"
//                         element={
//                             <div>
//                                 <AdminRoute isAdmin={isAdmin}>
//                                     <Outlet />
//                                 </AdminRoute>
//                             </div>
//                         }
//                     >
//                         <Route path="/" element={<AdminDashboard />} />
//                     </Route>
//                 )}
//                 {isLoggedIn && isBa && !isAdmin && (
//                     <Route
//                         path="/"
//                         element={
//                             <div>
//                                 <BaRoute isBa={isBa}>
//                                     <Outlet />
//                                 </BaRoute>
//                             </div>
//                         }
//                     >
//                         <Route path="/" element={<BaDashboard />} />
//                         <Route path="/survey/otp" element={<SubmitOtpForm />} />
//                         <Route path="/survey/reward" element={<Reward />} />
//                         <Route path="/survey/form" element={<QuestionForm />} />
//                         <Route
//                             path="/survey/secondary"
//                             element={<SecondarySurvey />}
//                         />
//                     </Route>
//                 )}
//                 <Route path="/" element={<Navigate to="/login" />} />

//                 <Route
//                     path="/login"
//                     element={
//                         <PublicRoute>
//                             <Login />
//                         </PublicRoute>
//                     }
//                 />
//             </Routes>
//             <ToastContainer />
//         </Loader>
//     );
// }

import { useEffect, useState } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import {
    Login,
    userActions,
    AdminDashboard,
    AdminRoute,
    BaRoute,
    BaDashboard,
    SubmitOtpForm,
    QuestionForm,
} from "../platform";
import { PublicRoute } from "./";
import DigitalSignature from "./digital";
import SecondarySurvey from "../platform/ba/components/secondary-survey.component";
import Reward from "../platform/ba/components/reward.component";
import Loader from "./common/loader.component";

const INACTIVE_TIMEOUT = 3600000; // 1 hour in milliseconds

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isBa, setIsBa] = useState(false);

    useEffect(() => {
        const handleLogout = () => {
            localStorage.clear();
            window.location.reload();
        };

        let timeoutId = setTimeout(handleLogout, INACTIVE_TIMEOUT);

        const resetTimer = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(handleLogout, INACTIVE_TIMEOUT);
        };

        // Attach event listeners for user activity
        window.addEventListener("mousemove", resetTimer);
        window.addEventListener("keydown", resetTimer);

        // Clean up event listeners when component unmounts
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("mousemove", resetTimer);
            window.removeEventListener("keydown", resetTimer);
        };
    }, []);

    useEffect(() => {
        userActions.handleUserType(setIsLoggedIn, setIsBa, setIsAdmin);
    }, []);

    return (
        <Loader>
            <Routes>
                {isLoggedIn && !isBa && isAdmin && (
                    <Route
                        path="/"
                        element={
                            <div>
                                <AdminRoute isAdmin={isAdmin}>
                                    <Outlet />
                                </AdminRoute>
                            </div>
                        }
                    >
                        <Route path="/" element={<AdminDashboard />} />
                    </Route>
                )}
                {isLoggedIn && isBa && !isAdmin && (
                    <Route
                        path="/"
                        element={
                            <div>
                                <BaRoute isBa={isBa}>
                                    <Outlet />
                                </BaRoute>
                            </div>
                        }
                    >
                        <Route path="/" element={<BaDashboard />} />
                        <Route path="/survey/otp" element={<SubmitOtpForm />} />
                        <Route path="/survey/reward" element={<Reward />} />
                        <Route path="/survey/form" element={<QuestionForm />} />
                        <Route
                            path="/survey/secondary"
                            element={<SecondarySurvey />}
                        />
                    </Route>
                )}
                <Route path="/" element={<Navigate to="/login" />} />

                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />
            </Routes>
            <ToastContainer />
        </Loader>
    );
}
