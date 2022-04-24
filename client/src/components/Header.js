import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../feature/auth/authSlice";
import decode from "jwt-decode";
import SearchBox from "./SearchBox";
function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        try {
            const id = decode(
                JSON.parse(localStorage.getItem("accessToken"))
            ).id;
            dispatch(getProfile(id));
        } catch (error) {}
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
                                <SearchBox />

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
