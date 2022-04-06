import mongoose from "mongoose";
import Post from "../Models/Post.js";

const index = async (req, res) => {
    try {
        const post = await Post.find();
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
const create = async (req, res) => {
    const data = req.body;
    try {
        const post = await Post.create(data);
        res.status(201).json(post);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
const update = async (req, res) => {
    const { id } = req.params;
    const post = req.body;
    if (!mongoose.isValidObjectId(id)) {
        return res.status(404).send("post with this id not found");
    }
    try {
        const updatedPost = await Post.findByIdAndUpdate(id, post, {
            new: true,
        });
        return res.send(200).json(updatedPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
const destroy = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
        return res.status(404).send("post with this id not found");
    }
    try {
        const post = await Post.findByIdAndRemove(id);
        if (!post) {
            return res
                .status(400)
                .json({ message: "post with this id not found" });
        }
        res.status(200).json({ id });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
const addLike = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
        return res.status(404).send("post with this id not found");
    }
    try {
        const post = await Post.findById(id);
        console.log(post);
        const likedPost = await Post.findByIdAndUpdate(
            id,
            {
                likeCount: post.likeCount + 1,
            },
            { new: true }
        );
        return res.status(200).json(likedPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
export { index, create, update, destroy, addLike };
