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
        likeCount: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);
const Post = mongoose.model("Post", postSchema);

export default Post;
