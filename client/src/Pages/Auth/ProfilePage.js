import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostCard from "../../components/PostCard";
import ProfileEditForm from "../../components/ProfileEditForm";
import Profile from "../../components/Profile";
import { fetchPosts } from "../../feature/post/postSlice";

function EditProfilePage() {
    const dispatch = useDispatch();
    const { username } = useParams();
    const posts = useSelector((state) => state.posts.posts);
    useEffect(() => {
        dispatch(fetchPosts({ username }));
        console.log("foo");
    }, [dispatch]);

    return (
        <>
            <div className="w-4/6 py-12 mx-auto bg-gray-100">
                <div className="flex flex-row items-start gap-5">
                    <div>
                        <Profile />
                        <ProfileEditForm username={username} />
                    </div>
                    <div className="w-1/2">
                        {posts.length !== 0 &&
                            posts.map((post) => (
                                <div className="mb-5" key={post._id}>
                                    <PostCard post={post}></PostCard>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditProfilePage;
