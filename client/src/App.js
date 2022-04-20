import React from "react";
import IndexPage from "./Pages/Post/IndexPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import ForgotPasswordPage from "./Pages/Auth/ForgotPasswordPage";
import ResetPasswordPage from "./Pages/Auth/ResetPasswordPage";
import ProfilePage from "./Pages/Auth/ProfilePage";
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";

const App = (props) => {
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
                        <Route path="/" element={<IndexPage />} />
                        <Route
                            path="/user/:username"
                            element={<ProfilePage />}
                        />
                    </Route>
                </Routes>
            </Router>
        </>
    );
};

export default App;
