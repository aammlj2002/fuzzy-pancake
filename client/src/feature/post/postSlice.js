import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const res = await axios.get("http://localhost:8000/posts/");
    return res.data;
});
const postSlice = createSlice({
    name: "Posts",
    initialState: {
        posts: {},
    },
    reducers: {},
    extraReducers: {
        [fetchPosts.fulfilled]: (state, action) => {
            return { ...state, posts: action.payload };
        },
    },
});

export default postSlice.reducer;
