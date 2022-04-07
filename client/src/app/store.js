import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../feature/post/postSlice";
import AuthReducer from "../feature/auth/authSlice";

export default configureStore({
    reducer: {
        posts: PostReducer,
        auth: AuthReducer,
    },
});
