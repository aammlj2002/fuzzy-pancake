import React from "react";
import { useSelector } from "react-redux";
import PostCard from "../../components/PostCard";
import PostCreateForm from "../../components/PostCreateForm";

function Posts() {
    const posts = useSelector((state) => state.posts.posts);
    return (
        <>
            <div className="w-full p-12 bg-gray-100">
                <div className="flex items-end justify-between px-6 mb-12 header">
                    <p className="mb-4 text-4xl font-bold text-gray-800">
                        Lastest Posts
                    </p>
                </div>
                <div className="flex gap-5 flex-justify">
                    <div className="grid w-2/3 grid-cols-2 gap-12">
                        {posts.length ? (
                            posts.map((post) => (
                                <PostCard key={post._id} post={post} />
                            ))
                        ) : (
                            <div>loading...</div>
                        )}
                    </div>
                    <div className="w-1/3 ">
                        <PostCreateForm />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Posts;
