import React from "react";

function PostCard() {
    return (
        <>
            <div className="m-auto overflow-hidden rounded-lg shadow-sm cursor-pointer h-90 w-60 md:w-80">
                <a href="/" className="block w-full h-full">
                    <img
                        alt="blog photo"
                        src="https://www.tailwind-kit.com/images/blog/1.jpg"
                        className="object-cover w-full max-h-40"
                    />
                    <div className="w-full p-4 bg-white ">
                        <p className="mb-2 text-xl font-medium text-gray-800 ">
                            Work at home
                        </p>
                        <p className="font-light text-gray-400 text-md">
                            Work at home, remote, is the new age of the job,
                            every person can work at home....
                        </p>
                        <div className="flex items-center mt-4">
                            <a href="#" className="relative block">
                                <img
                                    alt="profil"
                                    src="https://www.tailwind-kit.com/images/person/6.jpg"
                                    className="object-cover w-10 h-10 mx-auto rounded-full "
                                />
                            </a>
                            <div className="flex flex-col justify-between ml-4 text-sm">
                                <p className="text-gray-800 ">Jean Jacques</p>
                                <p className="text-gray-400 ">
                                    20 mars 2029 - 6 min read
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
}

export default PostCard;
