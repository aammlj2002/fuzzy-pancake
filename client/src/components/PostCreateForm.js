import React, { useState } from "react";
import Label from "../components/element/Label";
import Input from "../components/element/Input";
import Button from "../components/element/Button";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";
import { createPost } from "../feature/post/postSlice";
import Tag from "../components/Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function PostCreateForm() {
    const dispatch = useDispatch();
    const [tag, setTag] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: null,
        tags: [],
        user: JSON.parse(localStorage.getItem("profile")).result._id,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(formData));
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const addTag = () => {
        setFormData({ ...formData, tags: [...formData.tags, tag] });
        setTag("");
    };
    const removeTag = (seletedIndex) => {
        setFormData({
            ...formData,

            // filter out the index same with selected Index
            tags: formData.tags.filter((tag, index) => index !== seletedIndex),
        });
    };
    return (
        <>
            {/* {image} */}
            <div className="p-5 bg-white rounded-lg">
                <div className="self-center text-xl font-light text-gray-600">
                    Create Post
                </div>
                <div className="mt-4">
                    <form onSubmit={handleSubmit}>
                        {/* title */}
                        <div className="mb-5">
                            <Label text="Title" />
                            <Input
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                            />
                        </div>
                        {/* description */}
                        <div className="mb-5">
                            <Label text="Description" />
                            <Input
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </div>
                        {/* tags */}
                        <div className="mb-5">
                            <Label text="Tags" />
                            <div className="flex flex-row gap-5 mb-3">
                                <Input
                                    name="tag"
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

                            {formData.tags.map((tag, index) => (
                                <Tag
                                    key={index}
                                    tag={tag}
                                    index={index}
                                    removeTag={removeTag}
                                />
                            ))}
                        </div>

                        {/* file */}
                        <div className="mb-5">
                            <Label text="Image" />

                            <FileBase
                                multiple={false}
                                onDone={({ base64 }) =>
                                    setFormData({ ...formData, image: base64 })
                                }
                            />
                        </div>
                        <div className="flex w-full mt-6">
                            <Button type="submit">Add Post</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default PostCreateForm;
