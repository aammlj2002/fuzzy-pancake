import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function Pagination({ links }) {
    const location = useLocation();
    const currentUrl = `${location.pathname}${location.search}`;
    return (
        <>
            <div className="flex flex-col items-center p-8">
                <div className="flex items-center ">
                    {links.length ? (
                        links.map((link) => (
                            <Link
                                key={link.label}
                                to={link.url ?? currentUrl}
                                type="button"
                                className={`w-full px-4 py-2 text-base text-gray-500 bg-white border-t border-r border-b hover:bg-gray-100 ${
                                    link.label == "next" && "rounded-r-xl"
                                } ${
                                    link.label == "previous" &&
                                    "rounded-l-xl border-l"
                                }`}
                            >
                                {link.label == "next" ? (
                                    <FontAwesomeIcon icon={faAngleRight} />
                                ) : link.label == "previous" ? (
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                ) : (
                                    link.label
                                )}
                            </Link>
                        ))
                    ) : (
                        <div>loading...</div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Pagination;
