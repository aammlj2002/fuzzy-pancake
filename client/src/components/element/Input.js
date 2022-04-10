import React from "react";

function Input({ name, type = "text", value, onChange, className }) {
    const originalClasses =
        "flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent";

    return (
        <>
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                className={`${originalClasses} ${className}`}
            />
        </>
    );
}

export default Input;
