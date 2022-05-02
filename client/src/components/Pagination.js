import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import PaginationSkeleton from "./SkeletonLoaders/PaginationSkeleton";

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
                                onClick={(e) => {
                                    // disable url null buttton
                                    if (
                                        link.url == null &&
                                        (link.label == "next" || "previous")
                                    ) {
                                        e.preventDefault();
                                    }
                                }}
                                className={`w-full px-4 py-2 text-base  bg-white border-t border-r border-b hover:bg-gray-100 ${
                                    link.label == "next" && "rounded-r-xl"
                                } 
                                ${
                                    link.label == "previous" &&
                                    "rounded-l-xl border-l"
                                }
                                ${
                                    link.active
                                        ? "text-blue-500"
                                        : "text-gray-700"
                                }
                                ${
                                    // url null button
                                    link.url == null &&
                                    (link.label == "next" || "previous") &&
                                    "text-gray-300 cursor-not-allowed"
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
                        <PaginationSkeleton />
                    )}
                </div>
            </div>
        </>
    );
}

export default Pagination;
