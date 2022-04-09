import React, { useState } from "react";
import { useDispatch } from "react-redux";
import LikeIcon from "./icon/LikeIcon";
import { deletePost } from "../feature/post/postSlice";
import { likePost } from "../feature/post/postSlice";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

function PostCard({ post }) {
    const [showMenu, setShowMenu] = useState(false);
    const dispatch = useDispatch();
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const handleDeletePost = (id) => {
        dispatch(deletePost(id));
    };
    return (
        <>
            {/* flex items-center justify-center w-12 h-12 p-3 m-2 transition-all bg-transparent rounded-full hover:bg-gray-100 hover:bg-opacity-40  */}
            <div className="m-auto overflow-hidden rounded-lg shadow-sm cursor-pointer h-90 w-60 md:w-80">
                <Link to="/" className="block w-full h-full">
                    <div className="relative">
                        <div
                            onClick={toggleMenu}
                            className="absolute top-0 right-0"
                        >
                            <div class="relative inline-block text-left">
                                <div className="flex items-center justify-center w-12 h-12 p-3 m-2 transition-all bg-transparent rounded-full hover:bg-gray-100 hover:bg-opacity-40">
                                    <FontAwesomeIcon
                                        icon={faEllipsisVertical}
                                        className="text-2xl text-white"
                                    />
                                </div>
                                {showMenu ? (
                                    <div className="absolute right-0 w-56 mx-3 overflow-hidden origin-top-right bg-white rounded-md shadow-lg ring-black ring-opacity-5">
                                        <div className="">
                                            <div
                                                to="#"
                                                className="block px-4 py-2 text-gray-700 text-md hover:bg-gray-100 hover:text-gray-900 "
                                            >
                                                <span className="flex flex-col">
                                                    <span>Edit</span>
                                                </span>
                                            </div>
                                            <div
                                                onClick={() =>
                                                    handleDeletePost(post._id)
                                                }
                                                className="block px-4 py-2 text-gray-700 text-md hover:bg-gray-100 hover:text-gray-900 "
                                            >
                                                <span className="flex flex-col">
                                                    <span>Delete</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                        <img
                            alt="blog photo"
                            src={post.image}
                            className="object-cover w-full max-h-40"
                        />
                    </div>
                    <div className="w-full p-4 bg-white ">
                        <p className="mb-2 text-xl font-medium text-gray-800 ">
                            {post.title}
                        </p>
                        <p className="font-light text-gray-400 text-md">
                            {post.description}
                        </p>
                        <p className="font-light text-blue-400 text-md">
                            {post.tags.map((tag) => (
                                <span>#{tag} </span>
                            ))}
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
                                <p className="text-gray-800 ">
                                    {post.user.name}
                                </p>
                                <p className="text-gray-400 ">
                                    {post.createdAt}
                                </p>
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
