import React from "react";

function Label({ text, className }) {
    const originalClasses = "mb-1 text-sm text-gray-900";
    return (
        <>
            <label className={`${originalClasses} ${className}`}>{text}</label>
        </>
    );
}

export default Label;
