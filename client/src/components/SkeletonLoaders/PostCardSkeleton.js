import React from "react";

function PostCardSkeleton() {
    return (
        <>
            <div className="w-full m-auto mb-5 overflow-hidden rounded-lg shadow-sm cursor-pointer h-90">
                <div className="block w-full h-full">
                    <div className="object-cover w-full max-h-40">
                        <div className="w-full bg-gray-300 h-96"></div>
                    </div>
                    <div className="w-full p-4 bg-white ">
                        <div className="space-y-1">
                            <div className="w-5/6 h-6 bg-gray-300"></div>
                            <div className="w-full h-5 bg-gray-300"></div>
                            <div className="w-full h-5 bg-gray-300"></div>
                            <div className="w-4/6 h-5 bg-gray-300"></div>
                            <div className="space-x-1">
                                <div className="inline-block w-1/6 h-5 bg-gray-300"></div>
                                <div className="inline-block w-2/6 h-5 bg-gray-300"></div>
                            </div>
                        </div>

                        <div className="flex items-center justify-start mt-4 ">
                            <div className="object-cover w-10 h-10 bg-gray-300 rounded-full"></div>
                            <div className="w-10/12 ml-4 space-y-1 ">
                                <div className="w-2/6 h-3 bg-gray-300 "></div>
                                <div className="w-3/6 h-3 bg-gray-300"></div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between mt-4">
                            <div className="w-1/6 h-5 bg-gray-300"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostCardSkeleton;
