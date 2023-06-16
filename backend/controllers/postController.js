const Post = require('../models/post')

exports.posts_get = async (req, res, next) => {
    const allPosts = await Post.find().exec()
    res.json([
        ...allPosts
    ])
}