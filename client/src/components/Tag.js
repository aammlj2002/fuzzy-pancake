import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function Tag({ tag, index, removeTag }) {
    return (
        <>
            <div
                key={index}
                className="inline-block px-3 py-1 mb-3 mr-3 bg-gray-200 border rounded-full"
            >
                <span>{tag}</span>
                <FontAwesomeIcon
                    onClick={() => removeTag(index)}
                    className="ml-3 cursor-pointer"
                    icon={faXmark}
                />
            </div>
        </>
    );
}

export default Tag;
