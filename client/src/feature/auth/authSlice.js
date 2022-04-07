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

const authSlice = createSlice({
    name: "auth",
    initialState: { user: {} },
    reducers: {},
    extraReducers: {
        [signUp.fulfilled]: (state, action) => {
            localStorage.setItem("profile", JSON.stringify(action.payload));
        },
    },
});
export default authSlice.reducer;
