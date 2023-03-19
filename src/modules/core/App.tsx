import { useEffect } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import { useState } from "react";
import Dashboard from "../platform/user/components/dashboard.component";
import Login from "../platform/user/components/login.component";
import AdminRoute from "../platform/admin/admin.routes";
import PublicRoute from "./public.routes";
import { handleUserType } from "../platform/user/user.actions";
import "../../css/App.css";
// import BaRoute from "../platform/ba/ba.routes";

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isBa, setIsBa] = useState(false);

    useEffect(() => {
        handleUserType(setIsLoggedIn, setIsBa, setIsAdmin);
    }, []);

    return (
        <Routes>
            {isLoggedIn && !isBa && isAdmin && (
                <Route
                    path="/"
                    element={
                        <div className=" mb-5">
                            <AdminRoute isAdmin={isAdmin}>
                                <Outlet />
                            </AdminRoute>
                        </div>
                    }
                >
                    <Route path="/" element={<Dashboard />} />
                </Route>
            )}
            {/* {isLoggedIn && isBa && !isAdmin && (
                <Route
                    path="/"
                    element={
                        <div className="mainContainer">
                            <BaRoute isBa={isBa} isLoggedIn={isLoggedIn}>
                                <Outlet />
                            </BaRoute>
                        </div>
                    }
                >
                    <Route path="/" element={<Dashboard />} />
                </Route>
            )} */}
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
    );
}
