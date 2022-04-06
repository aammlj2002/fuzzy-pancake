import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="bg-gray-100">
            <div>header</div>
            <div>
                <Outlet />
            </div>
            <div>footer</div>
        </div>
    );
}

export default Layout;
