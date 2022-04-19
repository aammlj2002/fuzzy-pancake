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
                `${url}/${formData._id}/update`,
                formData
            );
            return res.data;
        } catch (error) {
            return error.response.data;
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: { errors: {} },
    reducers: {},
    extraReducers: {
        [signUp.fulfilled]: (state, action) => {
            localStorage.setItem(
                "profile",
                JSON.stringify(action.payload.result)
            );
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
                "profile",
                JSON.stringify(action.payload.result)
            );
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

            localStorage.setItem("profile", JSON.stringify(action.payload));
            return { ...state, errors: {} };
        },
    },
});
export default authSlice.reducer;
