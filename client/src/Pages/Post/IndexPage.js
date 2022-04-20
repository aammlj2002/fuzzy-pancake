import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../../components/PostCard";
import PostCreateForm from "../../components/PostCreateForm";
import PostEditForm from "../../components/PostEditForm";
import { fetchPosts } from "../../feature/post/postSlice";

function Posts() {
    const dispatch = useDispatch();

    // fetch post after index component is rendered
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
    const posts = useSelector((state) => state.posts.posts);
    const editPost = useSelector((state) => state.posts.editPost);

    return (
        <>
            <div className="w-full p-12 bg-gray-100">
                <div className="flex items-end justify-between px-6 mb-6 header">
                    <p className="text-4xl font-bold text-gray-800 ">
                        Lastest Posts
                    </p>
                </div>
                <div className="flex items-start gap-12 flex-justify">
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
                        {Object.keys(editPost).length === 0 ? (
                            <PostCreateForm />
                        ) : (
                            <PostEditForm editPost={editPost} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Posts;
