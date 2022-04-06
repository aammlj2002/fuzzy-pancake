import React from "react";

function Input({ type = "text", value = "", onChange = null }) {
    return (
        <>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
            />
        </>
    );
}

export default Input;
