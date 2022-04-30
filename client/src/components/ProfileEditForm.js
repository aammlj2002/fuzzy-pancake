import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { setAuthenticated, updateProfile } from "../feature/auth/authSlice";
import { fetchPosts } from "../feature/post/postSlice";
import FileBase64 from "react-file-base64";
import Label from "./element/Label";
import Error from "./element/Error";
import Button from "./element/Button";
import { useNavigate } from "react-router-dom";

function ProfileEditForm({ username }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);
    const profileFormValidation = Yup.object({
        name: Yup.string().required("name is required"),
        email: Yup.string()
            .email("please enter valid email")
            .required("name is required"),
        username: Yup.string()
            .max(15, "username can't be more than 15 characters")
            .min(5, "username must be at least 5 character"),
        avatar: Yup.string(),
    });
    // useEffect(() => {
    //     dispatch(fetchPosts({ username }));
    // }, [dispatch]);
    useEffect(() => {
        // reset after profile is fetched
        reset({
            name: auth.profile.name,
            email: auth.profile.email,
            username: auth.profile.username,
            avatar: auth.profile.avatar,
        });
    }, [auth]);
    const {
        register,
        getValues,
        setValue,
        watch,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(profileFormValidation),
        defaultValues: {
            name: auth.profile.name,
            email: auth.profile.email,
            username: auth.profile.username,
            avatar: auth.profile.avatar,
        },
    });
    const onSubmit = (data) => {
        dispatch(updateProfile(data));
    };
    const logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        dispatch(setAuthenticated(false));
    };
    return (
        <>
            {Object.keys(auth.profile).length !== 0 && (
                <div className="py-8 mb-5 bg-white rounded-lg shadow px-7">
                    <div className="mb-5 text-xl font-semibold text-center text-gray-600 capitalize ">
                        update profile information
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-5">
                            <img
                                className="w-24 h-24 mb-3 rounded-full "
                                src={
                                    getValues("avatar") ??
                                    "https://ui-avatars.com/api/?name=A+A+M+M&color=7F9CF5&background=EBF4FF"
                                }
                            />
                            <FileBase64
                                id="avatar"
                                multiple={false}
                                onDone={({ base64 }) => {
                                    watch(register());
                                    setValue("avatar", base64);
                                }}
                            />
                        </div>
                        <div className="mb-5">
                            <Label text="Name" />
                            <input
                                {...register("name")}
                                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
                            />
                            {errors.name && (
                                <Error>{errors.name.message}</Error>
                            )}
                        </div>
                        <div className="mb-5">
                            <Label text="Email" />
                            <input
                                {...register("email")}
                                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
                            />
                            {errors.email && (
                                <Error>{errors.email.message}</Error>
                            )}
                            {auth.errors.email && (
                                <Error>{auth.errors.email}</Error>
                            )}
                        </div>
                        <div className="mb-5">
                            <Label text="Username" />
                            <input
                                {...register("username")}
                                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
                            />
                            {errors.username && (
                                <Error>{errors.username.message}</Error>
                            )}
                            {auth.errors.username && (
                                <Error>{auth.errors.username}</Error>
                            )}
                        </div>
                        <div className="flex justify-end">
                            <Button type="submit" className="w-auto ml-5 ">
                                Save
                            </Button>
                        </div>
                    </form>
                </div>
            )}
            <Button type="button" onClick={logout} className="w-auto">
                Log out
            </Button>
        </>
    );
}

export default ProfileEditForm;
