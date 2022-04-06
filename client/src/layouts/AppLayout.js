import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
    return (
        <div className="bg-gray-100">
            <Header />
            <div>
                <Outlet />
            </div>
            <div>footer</div>
        </div>
    );
}

export default Layout;
