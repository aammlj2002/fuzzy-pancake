import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPosts } from "../feature/post/postSlice";

function Form() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();
    const hadleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPosts({ title, description }));
    };
    return (
        <>
            <fieldset>
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

export default Form;
