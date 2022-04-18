import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import IndexPage from "./Pages/Post/IndexPage";
import { fetchPosts } from "./feature/post/postSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import ForgotPasswordPage from "./Pages/Auth/ForgotPasswordPage";
import ResetPasswordPage from "./Pages/Auth/ResetPasswordPage";
import EditProfilePage from "./Pages/Auth/EditProfilePage";
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";

const App = (props) => {
    const dispatch = useDispatch();

    // fetch post after app component is rendered
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
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
                        <Route path="/:id/edit" element={<EditProfilePage />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
};

export default App;
