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

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isBa, setIsBa] = useState(false);

    const handleSaveSignature = (signature: string) => {
        // Do something with the signature
        console.log(signature);
    };

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
                        <Route path="/survey/form" element={<QuestionForm />} />
                        <Route
                            path="/survey/secondary"
                            element={<SecondarySurvey />}
                        />
                    </Route>
                )}
                <Route path="/" element={<Navigate to="/login" />} />
                <Route
                    path="/test"
                    element={<DigitalSignature onSave={handleSaveSignature} />}
                />
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
