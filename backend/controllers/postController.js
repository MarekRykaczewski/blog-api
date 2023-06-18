const Post = require('../models/post')

exports.posts_get = async (req, res, next) => {
    const allPosts = await Post.find().exec()
    res.json([
        ...allPosts
    ])
}

exports.post_get = async (req, res, next) => {
    const post = await Post.findById(req.params.id).exec()
    res.json({
        post: post
    })
}

exports.post_create = async (req, res, next) => {
    try {
        // Mock user ID
        const mockUserId = "648c39c27487491e3f183094"

        const post = new Post({
            title: req.body.title,
            content: req.body.content, 
            user:  mockUserId,
            comments: [],
            published: req.body.published
        })
        const result = await post.save()
        res.end()
    } catch (err) {
        return next(err)
    }
}

exports.post_delete = async (req, res, next) => {
    await Post.findByIdAndDelete(req.params.id).exec()
    res.end()
}

exports.post_update = async (req, res, next) => {
    try {
        // Mock user ID
        const mockUserId = "648c39c27487491e3f183094";

        const updatedFields = {
            title: req.body.title,
            content: req.body.content,
            published: req.body.published
        };

        const result = await Post.findByIdAndUpdate(
            req.params.id,
            updatedFields,
            { new: true, fields: ['title', 'content', 'published'] }
        );

        res.end();
    } catch (err) {
        return next(err);
    }
};