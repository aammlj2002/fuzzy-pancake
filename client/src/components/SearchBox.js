import React, { useState } from "react";
import {
    createSearchParams,
    useNavigate,
    useSearchParams,
} from "react-router-dom";

function SearchBox() {
    const navigate = useNavigate();
    const query = useSearchParams();
    const [search, setSearch] = useState("");
    const handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            // set query string
            navigate({
                pathname: "/",
                search: createSearchParams({
                    search,
                }).toString(),
            });
        }
    };
    return (
        <>
            <div className="relative flex items-center w-3/5 h-full lg:w-64 group">
                <svg
                    className="absolute left-0 z-20 block w-4 h-4 ml-4 text-gray-400 pointer-events-none fill-current "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                </svg>
                <input
                    value={search}
                    onKeyUp={handleKeyUp}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    className="block  w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-500 ring-opacity-90  bg-gray-300 text-gray-400 aa-input"
                    placeholder="Search"
                />
            </div>
        </>
    );
}

export default SearchBox;
