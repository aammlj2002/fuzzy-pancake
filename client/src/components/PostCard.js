import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost, setEditPost } from "../feature/post/postSlice";
import { likePost } from "../feature/post/postSlice";
import { Link } from "react-router-dom";
import OutSideClickHandler from "react-outside-click-handler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEllipsisVertical,
    faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

function PostCard({ post }) {
    const [showMenu, setShowMenu] = useState(false);
    const dispatch = useDispatch();
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const handleEditPost = (post) => {
        dispatch(setEditPost(post));
    };
    const handleDeletePost = (id) => {
        dispatch(deletePost(id));
    };

    return (
        <>
            <div className="w-full m-auto overflow-hidden rounded-lg shadow-sm cursor-pointer h-90">
                <div className="block w-full h-full">
                    <div className="relative">
                        <div className="absolute top-0 right-0">
                            <div className="relative inline-block text-left">
                                <OutSideClickHandler
                                    onOutsideClick={() => setShowMenu(false)}
                                >
                                    <div
                                        onClick={toggleMenu}
                                        className="flex items-center justify-center w-12 h-12 p-3 m-2 transition-all bg-transparent rounded-full hover:bg-gray-100 hover:bg-opacity-40"
                                    >
                                        <FontAwesomeIcon
                                            icon={faEllipsisVertical}
                                            className="block text-2xl text-white "
                                        />
                                    </div>

                                    {showMenu ? (
                                        <div className="absolute right-0 w-56 mx-3 overflow-hidden origin-top-right bg-white rounded-md shadow-lg ring-black ring-opacity-5">
                                            <div className="">
                                                <div
                                                    onClick={() =>
                                                        handleEditPost(post)
                                                    }
                                                    className="block px-4 py-2 text-gray-700 text-md hover:bg-gray-100 hover:text-gray-900 "
                                                >
                                                    <span className="flex flex-col">
                                                        <span>Edit</span>
                                                    </span>
                                                </div>
                                                <div
                                                    onClick={() =>
                                                        handleDeletePost(
                                                            post._id
                                                        )
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
                                </OutSideClickHandler>
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
                                <span className="font-bold" key={tag}>
                                    #{tag}{" "}
                                </span>
                            ))}
                        </p>
                        <div className="flex items-center mt-4">
                            <Link to="#" className="relative block">
                                <img
                                    alt="profile"
                                    src={post.image}
                                    className="object-cover w-10 h-10 mx-auto rounded-full "
                                />
                            </Link>
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
                                        dispatch(likePost(post._id));
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={faThumbsUp}
                                        className="text-xl"
                                    />
                                </div>
                                <span className="ml-2 text-sm">
                                    {/* {post.likes.length} Likes */}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostCard;
