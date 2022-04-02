import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./actions/post";
import Form from "./components/Form";
import Posts from "./components/Posts";

const App = (props) => {
    const dispatch = useDispatch();
    const post = useSelector((state) => state);
    useEffect(() => {
        console.log(post);
    }, [post]);
    const handleClick = () => {
        dispatch(addPost({ name: "aamm" }));
    };
    return (
        <>
            <div>app</div>
            <button onClick={handleClick}>add</button>
            <Form />
            <Posts />
        </>
    );
};

export default App;
