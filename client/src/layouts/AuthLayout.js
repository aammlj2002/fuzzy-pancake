import React from "react";
import { Outlet } from "react-router-dom";

function authLayout() {
    return (
        <>
            <div className="min-h-screen bg-gray-100 ralative">
                <div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                    <div className="flex flex-col max-w-md py-8 bg-white rounded-lg shadow px-7 w-80">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default authLayout;
