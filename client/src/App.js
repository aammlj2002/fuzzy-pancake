import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import EditForm from "./components/EditForm";
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
            <EditForm />
            <Posts />
        </>
    );
};

export default App;
