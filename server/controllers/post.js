import mongoose from "mongoose";
import Post from "../Models/Post.js";
import User from "../Models/User.js";

// check that is the inputed item exist in database
const isExist = (id) => {
    if (!mongoose.isValidObjectId(id)) {
        return res.status(404).send("invalid id");
    }
};
const index = async (req, res) => {
    const { search, page = 8 } = req.query;
    const limit = 2;
    try {
        // get all post
        if (search) {
            const searchQuery = new RegExp(search, "i");
            const post = await Post.find({
                $or: [{ title: searchQuery }, { description: searchQuery }],
            }).populate("user");
            return res.status(200).json(post);
        }
        const count = await Post.countDocuments();
        const totalPage = Math.ceil(count / limit);
        const pagination = [];
        for (let i = 0; i < totalPage; i++) {
            pagination.push({
                url: `?page=${i + 1}`,
                label: `${i + 1}`,
                active: false,
            });
        }

        const posts = await Post.find()
            .limit(limit)
            .skip(limit * (page - 1));
        return res.status(200).json({
            links: [
                {
                    url: page == 1 ? null : `?page=${page - 1}`,
                    label: "previous",
                    active: false,
                },
                ...pagination,
                {
                    url: page === totalPage ? null : `?page=${page + 1}`,
                    label: "next",
                    active: false,
                },
            ],
            posts,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const create = async (req, res) => {
    const reqPost = req.body;
    console.log(reqPost);
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
const getPostByUser = async (req, res) => {
    try {
        const username = req.params.username;
        const user = await User.findOne({ username });

        // populate posts and posts' user
        const { posts } = await user.populate({
            path: "posts",
            populate: { path: "user" },
        });
        console.log(posts);

        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({ message: "something went wrong" });
    }
};
export { index, create, update, destroy, addLike, getPostByUser };
