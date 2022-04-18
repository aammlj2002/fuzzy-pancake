import React from "react";
import Label from "../../components/element/Label";
import Error from "../../components/element/Error";
import Button from "../../components/element/Button";
import FileBase64 from "react-file-base64";
function EditProfilePage() {
    return (
        <>
            <div className="w-2/5 py-12 mx-auto bg-gray-100">
                <div className="w-full py-8 bg-white rounded-lg shadow px-7">
                    <div className="mb-5 text-xl font-semibold text-center text-gray-600 capitalize ">
                        update profile information
                    </div>
                    <div className="mb-5">
                        <img
                            className="mb-3 rounded-full"
                            src="https://ui-avatars.com/api/?name=A+A+M+M&color=7F9CF5&background=EBF4FF"
                        />
                        <FileBase64 multiple={false} />
                        {/* {errors.description && (
                            <Error>{errors.description.message}</Error>
                        )} */}
                    </div>
                    <div className="mb-5">
                        <Label text="Name" />
                        <input className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent" />
                        {/* {errors.description && (
                            <Error>{errors.description.message}</Error>
                        )} */}
                    </div>
                    <div className="mb-5">
                        <Label text="Email" />
                        <input className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent" />
                        {/* {errors.description && (
                            <Error>{errors.description.message}</Error>
                        )} */}
                    </div>
                    <div className="mb-5">
                        <Label text="Username" />
                        <input className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent" />
                        {/* {errors.description && (
                            <Error>{errors.description.message}</Error>
                        )} */}
                    </div>
                    <div className="flex justify-end">
                        <Button className="w-auto">Save</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditProfilePage;
