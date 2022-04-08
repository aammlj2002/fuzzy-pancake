import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API = axios.create({
    baseURL: "http://localhost:8000",
});
// add authorization token in request header with interceptors
API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.authorization = `Bearer ${
            JSON.parse(localStorage.getItem("profile")).token
        }`;
    }
    return req;
});

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const res = await API.get(`/posts`);
    return res.data;
});
export const createPost = createAsyncThunk(
    "posts/createPost",
    async ({ title, description }) => {
        const res = await API.post(
            `/posts/create`,
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
            const res = await API.patch(
                `/posts/update/${id}`,
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
            const res = await API.delete(`/posts/delete/${id}`);
            return res.data;
        } catch (error) {
            console.log(error.message);
        }
    }
);

export const likePost = createAsyncThunk("posts/likePost", async ({ id }) => {
    try {
        const res = await API.patch(`/posts/like/${id}`);
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
