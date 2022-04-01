import React from "react";
import { useParams } from "react-router-dom";
function PostPage() {
    const { postId } = useParams();
    return <div>{postId}</div>;
}

export default PostPage;
