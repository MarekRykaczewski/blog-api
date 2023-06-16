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