import React from "react";

function Profile() {
    const profile = JSON.parse(localStorage.getItem("profile"));
    return (
        <>
            <div className="py-8 mb-5 bg-white rounded-lg shadow px-7">
                <div className="flex flex-row items-center gap-8">
                    <img
                        className="w-24 h-24 rounded-full "
                        src={
                            profile.avatar ??
                            "https://ui-avatars.com/api/?name=A+A+M+M&color=7F9CF5&background=EBF4FF"
                        }
                    />
                    <div className="flex flex-col">
                        <div className="text-xl">{profile.name}</div>
                        <div className="text-sm text-gray-700 ">
                            {"@" + profile.username}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
