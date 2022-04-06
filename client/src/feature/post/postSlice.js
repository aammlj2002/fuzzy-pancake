import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const res = await axios.get("http://localhost:8000/posts/");
    return res.data;
});
export const createPost = createAsyncThunk(
    "posts/createPost",
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
export const updatePost = createAsyncThunk(
    "posts/updatePost",
    async ({ id, title, description }) => {
        try {
            const res = await axios.patch(
                `http://localhost:8000/posts/update/${id}`,
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
        } catch (error) {
            console.log(error.message);
        }
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
        [createPost.fulfilled]: (state, action) => {
            return { ...state, posts: [...state.posts, action.payload] };
        },
        [updatePost.fulfilled]: (state, action) => {
            return {
                ...state,

                //update the updated post
                posts: state.posts.map((post) => {
                    return post._id === action.payload._id
                        ? (post = action.payload)
                        : post;
                }),
            };
        },
    },
});
export const { setEditPost } = postSlice.actions;
export default postSlice.reducer;
