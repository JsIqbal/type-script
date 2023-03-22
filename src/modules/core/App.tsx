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
} from "../platform";
import { PublicRoute } from "./";

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isBa, setIsBa] = useState(false);

    useEffect(() => {
        userActions.handleUserType(setIsLoggedIn, setIsBa, setIsAdmin);
    }, []);

    return (
        <>
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
        </>
    );
}
