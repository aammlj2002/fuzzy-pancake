import React from "react";

function PaginationSkeleton() {
    return (
        <>
            <div className="flex flex-col items-center p-8">
                <div className="flex items-center ">
                    <div className="px-4 py-2 text-base bg-white border-t border-b border-l border-r w-11 h-11 rounded-l-xl hover:bg-gray-100"></div>
                    <div className="px-4 py-2 text-base bg-white border-t border-b border-r w-11 h-11 hover:bg-gray-100"></div>
                    <div className="px-4 py-2 text-base bg-white border-t border-b border-r w-11 h-11 hover:bg-gray-100"></div>
                    <div className="px-4 py-2 text-base bg-white border-t border-b border-r w-11 h-11 hover:bg-gray-100"></div>
                    <div className="px-4 py-2 text-base bg-white border-t border-b border-r w-11 h-11 hover:bg-gray-100"></div>
                    <div className="px-4 py-2 text-base bg-white border-t border-b border-r w-11 h-11 hover:bg-gray-100 rounded-r-xl"></div>
                </div>
            </div>
        </>
    );
}

export default PaginationSkeleton;
