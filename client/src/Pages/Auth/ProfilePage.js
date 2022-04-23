import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostCard from "../../components/PostCard";
import ProfileEditForm from "../../components/ProfileEditForm";
import Profile from "../../components/Profile";

function EditProfilePage() {
    const { username } = useParams();
    const posts = useSelector((state) => state.posts.posts);

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
