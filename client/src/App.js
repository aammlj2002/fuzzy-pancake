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
import decode from "jwt-decode";

const App = (props) => {
    const token = localStorage.getItem("accessToken");
    let auth;
    try {
        // if token can be decoded, auth is true
        decode(token);
        auth = true;
    } catch (error) {
        // if not, auth is false
        auth = false;
    }

    return (
        <>
            <Router>
                <Routes>
                    <Route element={<AuthLayout />}>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route
                            path="/forgotpassword"
                            element={<ForgotPasswordPage />}
                        />
                        <Route
                            path="/resetpassword"
                            element={<ResetPasswordPage />}
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
