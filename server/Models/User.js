import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,

        // email valdation
        match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    username: {
        type: String,
        maxLength: 15,
        unique: true,
        default: null,
    },
    avatar: {
        type: String,
        default: null,
    },
    password: {
        type: String,
        required: true,
    },
    posts: {
        type: [mongoose.ObjectId],
        ref: "Post",
        default: [],
    },
});
const User = mongoose.model("User", userSchema);
export default User;
