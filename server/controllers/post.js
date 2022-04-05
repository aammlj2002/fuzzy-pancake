import mongoose from "mongoose";
import Post from "../Models/Post.js";

const index = async (req, res) => {
    try {
        const post = await Post.find();
        console.log(post);
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
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("post with this id not found");
    }
    const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });
    res.json(updatedPost);
};
export { index, create, update };
