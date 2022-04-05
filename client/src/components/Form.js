import React, { useState } from "react";

function Form() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const hadleSubmit = (e) => {
        e.preventDefault();
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
