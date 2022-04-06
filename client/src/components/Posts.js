import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, setEditPost, likePost } from "../feature/post/postSlice";

function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const handleEditPost = (post) => {
        dispatch(setEditPost(post));
    };
    return (
        <>
            <div>Posts</div>
            {posts.length ? (
                posts.map((post) => (
                    <div key={post._id}>
                        <p>Title - {post.title}</p>
                        <p>Description - {post.description}</p>
                        <p>Like - {post.likeCount}</p>
                        <button onClick={() => handleEditPost(post)}>
                            Edit
                        </button>
                        <button
                            onClick={() =>
                                dispatch(deletePost({ id: post._id }))
                            }
                        >
                            delete
                        </button>
                        <button
                            onClick={() => dispatch(likePost({ id: post._id }))}
                        >
                            like
                        </button>
                        <hr />
                    </div>
                ))
            ) : (
                <div>loading...</div>
            )}
        </>
    );
}

export default Posts;
