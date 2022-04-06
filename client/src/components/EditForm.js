import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function EditForm() {
    const editPost = useSelector((state) => state.posts.editPost);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    useEffect(() => {
        setTitle(editPost.title);
        setDescription(editPost.description);
    }, [editPost]);
    const hadleSubmit = (e) => {
        e.preventDefault();
        console.log("foo");
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
