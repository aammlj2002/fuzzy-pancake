import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../../components/PostCard";
import { likePost } from "../../feature/post/postSlice";

function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    return (
        <>
            <div className="w-full p-12 bg-gray-100">
                <div className="flex items-end justify-between px-6 mb-12 header">
                    <p className="mb-4 text-4xl font-bold text-gray-800">
                        Lastest Posts
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
                    {posts.length ? (
                        posts.map((post) => (
                            <PostCard key={post._id} post={post} />
                        ))
                    ) : (
                        <div>loading...</div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Posts;
