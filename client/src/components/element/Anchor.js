import React from "react";
import { Link } from "react-router-dom";
function Anchor({ text, to }) {
    return (
        <>
            <Link
                className="inline-flex items-center text-sm font-light text-center text-gray-500 underline hover:text-gray-700"
                to={to}
            >
                <span className="ml-2">{text}</span>
            </Link>
        </>
    );
}

export default Anchor;
