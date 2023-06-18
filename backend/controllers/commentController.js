const Post = require('../models/post')

exports.comment_post = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id).populate("comments").exec()

        // Mock user ID
        const mockUserId = "648c39c27487491e3f183094"

        const comment = {
            content: req.body.content,
            user: mockUserId,
            createdAt: Date.now()
        }

        post.comments.push(comment)
        await post.save()
        res.end()
    } catch (err) {
        return next(err)
    }
}
