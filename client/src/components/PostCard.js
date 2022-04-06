import React from "react";
import { useDispatch } from "react-redux";
import LikeIcon from "./icon/LikeIcon";
import { likePost } from "../feature/post/postSlice";
import { Link } from "react-router-dom";

function PostCard({ post }) {
    const dispatch = useDispatch();
    return (
        <>
            <div className="m-auto overflow-hidden rounded-lg shadow-sm cursor-pointer h-90 w-60 md:w-80">
                <Link to="/" className="block w-full h-full">
                    <img
                        alt="blog photo"
                        src="https://www.tailwind-kit.com/images/blog/1.jpg"
                        className="object-cover w-full max-h-40"
                    />
                    <div className="w-full p-4 bg-white ">
                        <p className="mb-2 text-xl font-medium text-gray-800 ">
                            {post.title}
                        </p>
                        <p className="font-light text-gray-400 text-md">
                            {post.description}
                        </p>
                        <p className="font-light text-blue-400 text-md">
                            #post #programming #react
                        </p>
                        <div className="flex items-center mt-4">
                            <a href="#" className="relative block">
                                <img
                                    alt="profile"
                                    src="https://www.tailwind-kit.com/images/person/6.jpg"
                                    className="object-cover w-10 h-10 mx-auto rounded-full "
                                />
                            </a>
                            <div className="flex flex-col justify-between ml-4 text-sm">
                                <p className="text-gray-800 ">Jean Jacques</p>
                                <p className="text-gray-400 ">20 mars 2029</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between mt-4">
                            <div className="flex flex-row items-center justify-start ml-1">
                                <div
                                    className="inline-block"
                                    onClick={() => {
                                        dispatch(likePost({ id: post._id }));
                                    }}
                                >
                                    <LikeIcon
                                        width="23"
                                        style={"fill-gray-400"}
                                    />
                                </div>
                                <span className="ml-2 text-sm">
                                    {post.likeCount} Likes
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default PostCard;
