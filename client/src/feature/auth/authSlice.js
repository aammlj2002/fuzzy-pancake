import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// base url
const url = "http://localhost:8000/auth";

// sign up
export const signUp = createAsyncThunk("auth/signUp", async (formData) => {
    try {
        const res = await axios.post(`${url}/signup`, formData);
        return res.data;
    } catch (error) {
        console.log(error.message);
    }
});

// sign in
export const signIn = createAsyncThunk("auth/signIn", async (formData) => {
    try {
        const res = await axios.post(`${url}/signin`, formData);
        return res.data;
    } catch (error) {
        console.log(error.message);
    }
});

// update profile
export const updateProfile = createAsyncThunk(
    "auth/updateProfile",
    async (formData) => {
        try {
            const res = await axios.patch(
                `${url}/${formData.username}/update`,
                formData
            );
            return res.data;
        } catch (error) {
            return error.response.data;
        }
    }
);

// get profile data
export const getProfile = createAsyncThunk("auth/getProfile", async (id) => {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
});

const authSlice = createSlice({
    name: "auth",
    initialState: { profile: {}, errors: {} },
    reducers: {},
    extraReducers: {
        [signUp.fulfilled]: (state, action) => {
            localStorage.setItem(
                "accessToken",
                JSON.stringify(action.payload.accessToken)
            );
            localStorage.setItem(
                "refreshToken",
                JSON.stringify(action.payload.refreshToken)
            );
        },
        [signIn.fulfilled]: (state, action) => {
            localStorage.setItem(
                "accessToken",
                JSON.stringify(action.payload.accessToken)
            );
            localStorage.setItem(
                "refreshToken",
                JSON.stringify(action.payload.refreshToken)
            );
        },
        [updateProfile.fulfilled]: (state, action) => {
            if (action.payload.errors)
                return { ...state, errors: action.payload.errors };

            return { ...state, errors: {}, profile: action.payload };
        },
        [getProfile.fulfilled]: (state, action) => {
            return { ...state, profile: action.payload.user };
        },
    },
});
export default authSlice.reducer;
