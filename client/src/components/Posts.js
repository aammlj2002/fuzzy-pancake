import React from "react";
import { useSelector } from "react-redux";

function Posts() {
    const posts = useSelector((state) => state.posts.posts);
    console.log(posts);
    return (
        <>
            <div>Posts</div>
            {posts.length ? (
                posts.map((post) => <div key={post._id}>{post.title}</div>)
            ) : (
                <div>loading...</div>
            )}
        </>
    );
}

export default Posts;
