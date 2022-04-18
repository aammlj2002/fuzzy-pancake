import React, { useEffect, useState } from "react";
import Label from "./element/Label";
import Button from "./element/Button";
import { useDispatch, useSelector } from "react-redux";
import FileBase64 from "react-file-base64";
import { setEditPost, updatePost } from "../feature/post/postSlice";
import Error from "../components/element/Error";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";

function PostCreateForm(props) {
    const editPost = useSelector((state) => state.posts.editPost);
    const dispatch = useDispatch();
    const [tag, setTag] = useState("");
    const schema = Yup.object({
        title: Yup.string().required("title is required").max(255),
        description: Yup.string().required("description is reqired"),
        image: Yup.string().required("image is required"),
        tags: Yup.array().of(Yup.string()),
    });
    const {
        register,
        getValues,
        setValue,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            _id: editPost._id,
            title: editPost.title,
            description: editPost.description,
            tags: editPost.tags,
            image: editPost.image,
            user: JSON.parse(localStorage.getItem("profile"))._id,
        },
    });
    const onSubmit = async (data) => {
        // dispatch createPost event
        const res = dispatch(updatePost(data));

        // reset form
        res && dispatch(setEditPost({}));
    };
    const addTag = () => {
        // if inputed tag is not include in tags array and not empty string
        if (getValues("tags").indexOf(tag.trim()) == -1 && tag.trim()) {
            setValue("tags", [...getValues("tags"), tag.trim()]);
        }

        // reset input
        setTag("");
    };
    const removeTag = (seletedIndex) => {
        // filter out the index same with selected Index
        const filteredTags = getValues("tags").filter(
            (tag, index) => index !== seletedIndex
        );
        watch(register());
        setValue("tags", [...filteredTags]);
    };
    return (
        <>
            <div className="p-5 bg-white rounded-lg">
                <div className="self-center text-xl font-light text-gray-600">
                    Edit Post
                </div>
                <div className="mt-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* title */}
                        <div className="mb-5">
                            <Label text="Title" />
                            <input
                                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
                                {...register("title")}
                            />
                            {errors.title && (
                                <Error>{errors.title.message}</Error>
                            )}
                        </div>
                        {/* description */}
                        <div className="mb-5">
                            <Label text="Description" />
                            <input
                                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
                                {...register("description")}
                            />
                            {errors.description && (
                                <Error>{errors.description.message}</Error>
                            )}
                        </div>
                        {/* tags */}
                        <div className="mb-5">
                            <Label text="Tags" />
                            <div className="flex flex-row gap-5 mb-3">
                                <input
                                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
                                    value={tag}
                                    onChange={(e) => setTag(e.target.value)}
                                />
                                <Button
                                    type="button"
                                    onClick={addTag}
                                    className="w-auto "
                                >
                                    <FontAwesomeIcon icon={faPlus} />
                                </Button>
                            </div>

                            {getValues("tags").map((tag, index) => (
                                <div
                                    key={index}
                                    className="inline-block px-3 py-1 mb-3 mr-3 bg-gray-200 border rounded-full"
                                >
                                    <span>{tag}</span>
                                    <FontAwesomeIcon
                                        onClick={() => removeTag(index)}
                                        className="ml-3 cursor-pointer"
                                        icon={faXmark}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* file */}
                        <div className="mb-5">
                            <Label text="Image" />

                            <FileBase64
                                multiple={false}
                                onDone={({ base64 }) => {
                                    setValue("image", base64);
                                }}
                                {...register("image")}
                            />
                            <img className="mt-5" src={getValues("image")} />
                            {errors.image && (
                                <Error>{errors.image.message}</Error>
                            )}
                        </div>
                        <div className="flex w-full mt-6">
                            <Button type="submit">Update Post</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default PostCreateForm;
