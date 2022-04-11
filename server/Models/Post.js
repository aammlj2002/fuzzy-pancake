import mongoose from "mongoose";
const postSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxLength: 225,
        },
        description: {
            type: String,
            required: true,
        },
        user: {
            type: mongoose.ObjectId,
            ref: "User",
            required: true,
        },
        tags: {
            type: [String],
            default: [],
        },
        image: {
            type: String,
            default: null,
        },
        likes: {
            type: [mongoose.ObjectId],
            ref: "User",
            default: [],
        },
    },
    { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
