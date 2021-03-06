import mongoose from "mongoose";
import Post from "../Models/Post.js";
import User from "../Models/User.js";
import paginate from "../utils/paginate.js";

// check that is the inputed item exist in database
const isExist = (id) => {
    if (!mongoose.isValidObjectId(id)) {
        return res.status(404).send("invalid id");
    }
};
const index = async (req, res) => {
    const { search = "", page = 1, limit = 10 } = req.query;
    const { username } = req.params;
    try {
        if (username) {
            const user = await User.findOne({ username }).populate({
                path: "posts",
                populate: { path: "user" },
            });
            return res.status(200).json({ user, posts: user.posts, links: [] });
        }
        // get all post
        if (search) {
            const searchQuery = new RegExp(search, "i");
            const query = Post.find({
                $or: [{ title: searchQuery }, { description: searchQuery }],
            });
            const posts = await query
                .limit(limit)
                .skip(limit * (page - 1))
                .populate("user");
            const count = await Post.find({
                $or: [{ title: searchQuery }, { description: searchQuery }],
            }).countDocuments();
            const links = paginate({ count, limit, page, search });
            return res.status(200).json({ posts, links });
        }
        const count = await Post.countDocuments();
        const links = paginate({ count, limit, page, search });

        const posts = await Post.find()
            .limit(limit)
            .skip(limit * (page - 1))
            .populate("user");
        return res.status(200).json({
            links,
            posts,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const create = async (req, res) => {
    const reqPost = req.body;
    try {
        try {
            // create post
            const post = await Post.create(reqPost);

            // *** have to refactor to model
            try {
                // push posts in user model
                await User.findByIdAndUpdate(
                    post.user,
                    {
                        $push: { posts: post._id },
                    },
                    { new: true }
                );
            } catch (error) {
                // if fail remove the post
                await Post.findByIdAndRemove(post._id);

                // *** need to fix this
                return res.status(500).json({ message: error.message });
            }
            // populate author
            await post.populate("user");
            return res.status(201).json(post);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
const update = async (req, res) => {
    try {
        const { id } = req.params;
        const reqPost = req.body;

        isExist(id);
        try {
            // update post
            const post = await Post.findByIdAndUpdate(id, reqPost, {
                new: true,
            }); // new option "true" is to get response data only after update

            // pouplate author
            await post.populate("user");
            return res.status(200).json(post);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
const destroy = async (req, res) => {
    try {
        const { id } = req.params;
        isExist(id);
        try {
            // find selected post
            const post = await Post.findById(id);

            // ** i have to refactor to post model
            try {
                // remove seleced post id from user table
                await User.findByIdAndUpdate(
                    post.user,
                    {
                        $pull: { posts: post._id }, // remove deleted post from posts array of user model
                    },
                    { new: true }
                );
            } catch (error) {
                return res.status(500).json({ message: error.message });
            }

            // remove selected post
            await Post.findByIdAndRemove(id);
            return res.status(200).json({ id });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
const addLike = async (req, res) => {
    try {
        const { id } = req.params;
        const user = mongoose.Types.ObjectId(req.body.user);
        isExist(id);
        try {
            const oldPost = await Post.findById(id);
            let action = {
                $push: { likes: user }, // add user id to like array
            };
            if (oldPost.likes.indexOf(user) !== -1) {
                // user exist in likes array
                action = {
                    $pull: { likes: user }, // remove user id from like array
                };
            }

            // update like
            const post = await Post.findByIdAndUpdate(
                id,
                action,
                { new: true } // new option "true" is to get response data only after update
            );
            //pupulate author
            await post.populate("user");
            return res.status(200).json(post);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export { index, create, update, destroy, addLike };
