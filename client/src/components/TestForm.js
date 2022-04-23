import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import FileBase64 from "react-file-base64";

function TestForm() {
    const [tag, setTag] = useState("");
    const schema = Yup.object({
        title: Yup.string().required("title is required").max(3),
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
            title: "title1",
            description: "description1",
            tags: ["tag1", "tag2"],
        },
    });
    const addTag = () => {
        if (getValues("tags").indexOf(tag) == -1 && tag.trim()) {
            setValue("tags", [...getValues("tags"), tag.trim()]);
        }
        setTag("");
    };
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>TestForm</h2>
            <label>title</label>
            <input
                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
                {...register("title")}
            />
            {errors?.title?.message}
            <label>description</label>
            <input
                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
                {...register("description")}
            />
            {errors?.description?.message}
            <br />
            <label>tags</label>
            <input
                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
            />
            {getValues("tags").map((tag) => (
                <p key={tag}>{tag}</p>
            ))}
            {errors?.description?.message}
            <button type="button" onClick={addTag}>
                add tag
            </button>
            <br />
            <FileBase64
                multiple={false}
                onDone={({ base64 }) => {
                    setValue("image", base64);
                }}
                {...register("image")}
            />
            <br />
            <button type="submit">submit</button>
        </form>
    );
}

export default TestForm;
