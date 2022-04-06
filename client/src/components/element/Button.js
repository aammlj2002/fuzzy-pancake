import React from "react";

function Button({ type = "button", children }) {
    return (
        <>
            <button
                type={type}
                className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
            >
                {children}
            </button>
        </>
    );
}

export default Button;
