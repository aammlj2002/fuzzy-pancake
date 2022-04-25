import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import decode from "jwt-decode";

const currentUser = decode(JSON.parse(localStorage.getItem("accessToken")));
const API = axios.create({
    baseURL: "http://localhost:8000",
});
// add authorization token in request header with interceptors
API.interceptors.request.use(async (req) => {
    const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
    let accessToken = JSON.parse(localStorage.getItem("accessToken"));
    const decoded = decode(accessToken);
    if (decoded.exp * 1000 < new Date().getTime()) {
        const { data } = await axios.post(
            `http://localhost:8000/auth/refreshtoken`,
            { refreshToken }
        );
        localStorage.setItem("accessToken", JSON.stringify(data.token));
    }
    accessToken = JSON.parse(localStorage.getItem("accessToken"));
    if (accessToken) {
        req.headers.authorization = `Bearer ${accessToken}`;
    }
    return req;
});

export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async ({ username, search, page }) => {
        console.log(page);
        if (username) {
            const res = await API.get(`/posts/${username}/posts`);
            return res.data;
        }
        if (page) {
            const res = await API.get(`/posts?page=${page}`);
            return res.data;
        }
        if (search) {
            const res = await API.get(`/posts?search=${search}`);
            return res.data;
        }
        const res = await API.get(`/posts`);
        return res.data;
    }
);
export const createPost = createAsyncThunk(
    "posts/createPost",
    async (newPost) => {
        console.log(newPost);
        const res = await API.post(`/posts/create`, newPost, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return res.data;
    }
);
export const updatePost = createAsyncThunk(
    "posts/updatePost",
    async (editPost) => {
        try {
            const res = await API.patch(
                `/posts/update/${editPost._id}`,
                editPost,
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
export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
    try {
        const res = await API.delete(`/posts/delete/${id}`);
        return res.data;
    } catch (error) {
        console.log(error.message);
    }
});

export const likePost = createAsyncThunk("posts/likePost", async (post_id) => {
    try {
        const res = await API.patch(`/posts/like/${post_id}`, {
            user: currentUser.id,
        });
        return res.data;
    } catch (error) {
        console.log(error.message);
    }
});

const postSlice = createSlice({
    name: "Posts",
    initialState: {
        posts: [],
        links: [],
        editPost: {},
    },
    reducers: {
        setEditPost: (state, action) => {
            state.editPost = action.payload;
        },
    },
    extraReducers: {
        [fetchPosts.fulfilled]: (state, action) => {
            return {
                ...state,
                posts: action.payload.posts,
                links: action.payload.links,
            };
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
