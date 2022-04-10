import mongoose from "mongoose";
import User from "./User.js";
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

// check that is the inputed item exist in database
postSchema.method.isExist = function (id) {
    if (!mongoose.isValidObjectId(id)) {
        return res.status(404).send("post with this id not found");
    }
};

postSchema.post("save", async function () {
    // push posts in user model
    await User.findByIdAndUpdate(
        this.user,
        {
            $push: { posts: this._id },
        },
        { new: true }
    );
});
const Post = mongoose.model("Post", postSchema);

export default Post;
