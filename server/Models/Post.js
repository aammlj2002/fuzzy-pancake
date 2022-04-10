import mongoose from "mongoose";
const postSchema = mongoose.Schema(
    {
        title: String,
        description: String,
        user: {
            type: mongoose.ObjectId,
            ref: "User",
        },
        tags: [String],
        image: String,
        seletedFile: String,
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
