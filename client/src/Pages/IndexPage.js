import React from "react";

function IndexPages() {
    return (
        <main className="relative h-screen overflow-hidden bg-gray-100">
            <div className="flex content-center justify-center">
                <div className="w-4/6">
                    <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
                        <h1 className="mt-8 text-4xl font-semibold text-gray-800 ">
                            News Feed
                        </h1>
                        <h2 className="text-gray-400 text-md">
                            Explore more about people
                        </h2>
                        <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
                            <div className="w-full">
                                <div className="relative w-full px-4 py-6 bg-white rounded-md shadow-md">
                                    <h1>post</h1>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="relative w-full px-4 py-6 bg-white rounded-md shadow-md">
                                    <h1>post</h1>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="relative w-full px-4 py-6 bg-white rounded-md shadow-md">
                                    <h1>post</h1>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="relative w-full px-4 py-6 bg-white rounded-md shadow-md">
                                    <h1>post</h1>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="relative w-full px-4 py-6 bg-white rounded-md shadow-md">
                                    <h1>post</h1>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="relative w-full px-4 py-6 bg-white rounded-md shadow-md">
                                    <h1>post</h1>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="relative w-full px-4 py-6 bg-white rounded-md shadow-md">
                                    <h1>post</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default IndexPages;
