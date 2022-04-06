import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../feature/post/postSlice";

function EditForm() {
    const dispatch = useDispatch();
    const editPost = useSelector((state) => state.posts.editPost);
    const id = editPost._id;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    useEffect(() => {
        setTitle(editPost.title);
        setDescription(editPost.description);
    }, [editPost]);
    const hadleSubmit = (e) => {
        e.preventDefault();
        dispatch(updatePost({ id, title, description }));
    };
    return (
        <>
            <fieldset>
                <h3>edit</h3>
                <form onSubmit={hadleSubmit}>
                    <label>title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <br />
                    <label>description</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button type="submit">submit</button>
                </form>
            </fieldset>
        </>
    );
}

export default EditForm;
