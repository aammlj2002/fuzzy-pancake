import mongoose from "mongoose";
import Post from "../Models/Post.js";
import User from "../Models/User.js";
// check that is the inputed item exist in database
const isExist = (id) => {
    if (!mongoose.isValidObjectId(id)) {
        return res.status(404).send("post with this id not found");
    }
};
const index = async (req, res) => {
    try {
        // get all post
        const post = await Post.find().populate("user");
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
const create = async (req, res) => {
    const data = req.body;
    try {
        // create post
        const post = await Post.create(data);

        // *** posts array in user collection will save in model

        // populate author
        await post.populate("user");
        res.status(201).json(post);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
const update = async (req, res) => {
    const { id } = req.params;
    const post = req.body;

    isExist(id);
    try {
        // update post
        const updatedPost = await Post.findByIdAndUpdate(id, post, {
            new: true,
        }); // new option "true" is to get response data only after update

        // pouplate author
        await updatedPost.populate("user");
        return res.status(200).json(updatedPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
const destroy = async (req, res) => {
    const { id } = req.params;
    isExist(id);
    try {
        // find selected post
        const post = await Post.findById(id);

        // remove seleced post id from user table ** i have to refactor to post model
        await User.findByIdAndUpdate(
            post.user,
            {
                $pull: { posts: post._id },
            },
            { new: true }
        );

        // remove selected post
        await Post.findByIdAndRemove(id);
        res.status(200).json({ id });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
const addLike = async (req, res) => {
    const { id } = req.params;
    const user = mongoose.Types.ObjectId(req.body.user);
    isItemExist(id);
    try {
        const post = await Post.findById(id);
        let action = {
            $push: { likes: user }, // add user id to like array
        };
        if (post.likes.indexOf(user) !== -1) {
            // user exist in likes array
            action = {
                $pull: { likes: user }, // remove user id from like array
            };
        }

        // update like
        const likedPost = await Post.findByIdAndUpdate(
            id,
            action,
            { new: true } // new option "true" is to get response data only after update
        );

        //pupulate author
        await likedPost.populate("user");
        return res.status(200).json(likedPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
export { index, create, update, destroy, addLike };
