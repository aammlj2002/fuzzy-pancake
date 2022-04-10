import React from "react";
import { Link } from "react-router-dom";
function Anchor({ text, to, className }) {
    const originalClasses =
        "inline-flex items-center text-sm font-light text-center text-gray-500 underline hover:text-gray-700";
    return (
        <>
            <Link className={`${originalClasses} ${className}`} to={to}>
                <span className="ml-2">{text}</span>
            </Link>
        </>
    );
}

export default Anchor;
