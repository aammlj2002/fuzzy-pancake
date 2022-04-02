import axios from "axios";
const addPost = (post) => (dispatch) => {
    dispatch({ type: "ADD_POST", payload: post });
};
const createPost = (post) => async (dispatch) => {
    const { data } = await axios.post(
        "http://localhost:8000/posts/create",
        post
    );
    dispatch({ type: "CREATE_POST", payload: data });
};

export { addPost, createPost };
