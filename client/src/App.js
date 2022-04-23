import React, { useEffect, useState } from "react";
import IndexPage from "./Pages/Post/IndexPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import ForgotPasswordPage from "./Pages/Auth/ForgotPasswordPage";
import ResetPasswordPage from "./Pages/Auth/ResetPasswordPage";
import ProfilePage from "./Pages/Auth/ProfilePage";
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";
import AuthMiddleware from "./middleware/AuthMiddleware";
import GuestMiddleware from "./middleware/GuestMiddleware";
import decode from "jwt-decode";

const App = (props) => {
    const token = localStorage.getItem("accessToken");
    const [auth, setAuth] = useState(true);
    useEffect(() => {
        try {
            // if token can be decoded, auth is true
            const deocded = decode(token);
            if (deocded) {
                setAuth(true);
            }
        } catch (error) {
            // if not, auth is false
            setAuth(false);
        }
    }, []);

    return (
        <>
            <Router>
                <Routes>
                    <Route element={<AuthLayout />}>
                        <Route
                            path="/login"
                            element={
                                <GuestMiddleware auth={auth}>
                                    <LoginPage />
                                </GuestMiddleware>
                            }
                        />
                        <Route
                            path="/register"
                            element={
                                <GuestMiddleware auth={auth}>
                                    <RegisterPage />
                                </GuestMiddleware>
                            }
                        />
                        <Route
                            path="/forgotpassword"
                            element={
                                <GuestMiddleware auth={auth}>
                                    <ForgotPasswordPage />
                                </GuestMiddleware>
                            }
                        />
                        <Route
                            path="/resetpassword"
                            element={
                                <GuestMiddleware auth={auth}>
                                    <ResetPasswordPage />
                                </GuestMiddleware>
                            }
                        />
                    </Route>
                    <Route path="/" element={<AppLayout />}>
                        <Route
                            path="/"
                            element={
                                <AuthMiddleware auth={auth}>
                                    <IndexPage />
                                </AuthMiddleware>
                            }
                        />

                        <Route
                            path="/user/:username"
                            element={
                                <AuthMiddleware auth={auth}>
                                    <ProfilePage />
                                </AuthMiddleware>
                            }
                        />
                    </Route>
                </Routes>
            </Router>
        </>
    );
};

export default App;
