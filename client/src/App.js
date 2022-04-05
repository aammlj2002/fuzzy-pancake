import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Form from "./components/Form";
import Posts from "./components/Posts";
import { fetchPosts } from "./feature/post/postSlice";

const App = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
    return (
        <>
            <div>app</div>
            <Form />
            <Posts />
        </>
    );
};

export default App;
