const Post = require('../models/post')
const Comment = require('../models/comment')

exports.comment_post = async (req, res, next) => {
    try {
        // Mock user ID
        const mockUserId = "648c39c27487491e3f183094"

        const comment = new Comment({
            content: req.body.content,
            user: mockUserId,
        })

        await comment.save()

        await Post.findOneAndUpdate({
            _id: req.params.id,
            $push: {comments: comment}
        })
        res.end()
    } catch (err) {
        return next(err)
    }
}
