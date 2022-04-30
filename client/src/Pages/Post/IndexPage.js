import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import PostCard from "../../components/PostCard";
import PostCreateForm from "../../components/PostCreateForm";
import PostEditForm from "../../components/PostEditForm";
import { clearPosts, fetchPosts } from "../../feature/post/postSlice";
import Pagination from "../../components/Pagination";
import PostCardSkeleton from "../../components/SkeletonLoaders/PostCardSkeleton";

function Posts() {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search");
    const page = searchParams.get("page");
    const posts = useSelector((state) => state.posts.posts);
    const links = useSelector((state) => state.posts.links);
    const editPost = useSelector((state) => state.posts.editPost);
    // fetch post after index component is rendered
    useEffect(() => {
        dispatch(fetchPosts({ search, page }));
    }, [dispatch, search, page]);

    return (
        <>
            <div className="w-full p-12 bg-gray-100">
                <div className="flex items-end justify-between px-6 mb-6 header">
                    <p className="text-4xl font-bold text-gray-800 ">
                        {search ? `Search: ${search}` : "Lastest Posts"}
                    </p>
                </div>
                <div className="flex items-start gap-12 flex-justify">
                    <div className="w-2/3">
                        <div className="grid w-full grid-cols-2 gap-12">
                            {posts.length ? (
                                posts.map((post) => (
                                    <PostCard key={post._id} post={post} />
                                ))
                            ) : (
                                <PostCardSkeleton />
                            )}
                        </div>
                        <Pagination links={links} />
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
