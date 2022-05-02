import React from "react";

function ProfileSkeleton() {
    return (
        <>
            <div className="py-8 mb-5 bg-white rounded-lg shadow px-7">
                <div className="flex items-center justify-start gap-8">
                    <div className="object-cover w-24 h-24 bg-gray-300 rounded-full"></div>
                    <div className="w-7/12 space-y-1 ">
                        <div className="w-4/6 h-5 bg-gray-300"></div>
                        <div className="w-3/6 h-5 bg-gray-300 "></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileSkeleton;
