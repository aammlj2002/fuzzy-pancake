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
export const deletePost = createAsyncThunk(
    "posts/deletePost",
    async ({ id }) => {
        try {
            const res = await axios.delete(
                `http://localhost:8000/posts/delete/${id}`
            );
            return res.data;
        } catch (error) {
            console.log(error.message);
        }
    }
);

export const likePost = createAsyncThunk("posts/likePost", async ({ id }) => {
    try {
        const res = await axios.patch(`http://localhost:8000/posts/like/${id}`);
        return res.data;
    } catch (error) {
        console.log(error.message);
    }
});

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
        [deletePost.fulfilled]: (state, action) => {
            return {
                ...state,

                // remove deleted post
                posts: state.posts.filter((post) => {
                    return action.payload.id !== post._id;
                }),
            };
        },
        [likePost.fulfilled]: (state, action) => {
            return {
                ...state,

                // update the liked post
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
