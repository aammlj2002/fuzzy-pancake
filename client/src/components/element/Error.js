import React from "react";

function Error(props) {
    return (
        <>
            <p className="text-sm text-red-500">{props.children}</p>
        </>
    );
}

export default Error;
