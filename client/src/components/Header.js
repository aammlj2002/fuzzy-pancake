import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../feature/auth/authSlice";
import decode from "jwt-decode";
function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const id = decode(JSON.parse(localStorage.getItem("accessToken"))).id;
    useEffect(() => {
        dispatch(getProfile(id)).then((res) => {
            if (res.error) {
                return navigate("/login");
            }
        });
    }, [dispatch]);
    const profile = useSelector((state) => state.auth.profile);
    return (
        <>
            <div>
                <nav className="bg-gray-200 shadow-sm">
                    <div className="px-8 mx-auto max-w-7xl">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex flex-row items-center justify-start ">
                                    <Link
                                        className="text-2xl text-black "
                                        to="/"
                                    >
                                        MERN
                                    </Link>
                                    {/* navigation */}
                                    <div className="block">
                                        <div className="flex items-baseline ml-10 space-x-4">
                                            <Link
                                                className="px-3 py-2 text-sm font-medium text-gray-600 transition-all rounded-md hover:text-gray-800"
                                                to="/"
                                            >
                                                Home
                                            </Link>
                                            <Link
                                                className="px-3 py-2 text-sm font-medium text-gray-600 transition-all rounded-md hover:text-gray-800"
                                                to="/"
                                            >
                                                About
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                {/* search box */}
                                <div className="relative flex items-center w-3/5 h-full lg:w-64 group">
                                    <svg
                                        className="absolute left-0 z-20 block w-4 h-4 ml-4 text-gray-400 pointer-events-none fill-current "
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                                    </svg>
                                    <input
                                        type="text"
                                        className="block  w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-500 ring-opacity-90  bg-gray-300 text-gray-400 aa-input"
                                        placeholder="Search"
                                    />
                                </div>
                                <Link
                                    to={`/user/${profile?.username}`}
                                    className="flex items-center w-2/5 "
                                >
                                    {profile ? (
                                        <img
                                            className="w-12 h-12 rounded-full"
                                            src={profile?.avatar}
                                        />
                                    ) : (
                                        ""
                                    )}
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;
