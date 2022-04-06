import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const res = await axios.get("http://localhost:8000/posts/");
    return res.data;
});
export const createPosts = createAsyncThunk(
    "posts/createPosts",
    async ({ title, description }) => {
        const res = await axios.post(
            "http://localhost:8000/posts/create",
            {
                title,
                description,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return res.data;
    }
);

const postSlice = createSlice({
    name: "Posts",
    initialState: {
        posts: {},
        editPost: {
            title: "",
            description: "",
        },
    },
    reducers: {
        setEditPost: (state, action) => {
            state.editPost = action.payload;
        },
    },
    extraReducers: {
        [fetchPosts.fulfilled]: (state, action) => {
            return { ...state, posts: action.payload };
        },
        [createPosts.fulfilled]: (state, action) => {
            return { ...state, posts: [...state.posts, action.payload] };
        },
    },
});
export const { setEditPost } = postSlice.actions;
export default postSlice.reducer;
