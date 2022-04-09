import React, { useState } from "react";
import Label from "../components/element/Label";
import Input from "../components/element/Input";
import Button from "../components/element/Button";

function PostCreateForm() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
    });
    const handleSubmit = () => {};
    const handleChange = () => {};
    return (
        <>
            <div className="p-5 bg-white rounded-lg">
                <div className="self-center text-xl font-light text-gray-600">
                    Create Post
                </div>
                <div className="mt-4">
                    <form onSubmit={handleSubmit}>
                        {/* title */}
                        <div className="mb-5">
                            <Label text="Email" />
                            <Input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        {/* description */}
                        <div className="mb-5">
                            <Label text="Description" />
                            <Input
                                name="description"
                                type="description"
                                value={formData.password}
                                onChange={handleChange}
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
