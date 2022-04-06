import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import EditForm from "./components/EditForm";
import Form from "./components/Form";
import Posts from "./components/Posts";
import { fetchPosts } from "./feature/post/postSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Layout from "./components/Layout";

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
                    <Route>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Route>
                    <Route path="/" element={<Layout />}>
                        <Route path="/posts" element={<Posts />} />
                        <Route path="/form" element={<Form />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
};

export default App;
