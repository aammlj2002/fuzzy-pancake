import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout() {
    return (
        <div className="bg-gray-100">
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
