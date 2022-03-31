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
export { index, create };
