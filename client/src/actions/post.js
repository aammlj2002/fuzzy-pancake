const addPost = (post) => (dispatch) => {
    dispatch({ type: "ADD_POST", payload: post });
};

export { addPost };
