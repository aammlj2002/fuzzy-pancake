import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "../Pages/IndexPage";
import PostPage from "../Pages/PostPage";
function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<IndexPage />}></Route>
                <Route path="/:postId" element={<PostPage />}></Route>
            </Routes>
        </Router>
    );
}

export default AppRoutes;
