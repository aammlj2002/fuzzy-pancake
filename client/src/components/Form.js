import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/post";

function Form() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const hadleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost({ title, description }));
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
