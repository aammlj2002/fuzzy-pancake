import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    posts: {
        type: [mongoose.ObjectId],
        ref: "Post",
    },
});
const User = mongoose.model("User", userSchema);
export default User;
