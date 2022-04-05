import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../feature/post/postSlice";

export default configureStore({
    reducer: {
        posts: PostReducer,
    },
});
