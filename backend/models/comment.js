const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    content: { type: String, required: true, maxLength: 250 }, 
    createdAt: { type: Date, required: true, default: Date.now },
    post: [{type: Schema.Types.ObjectId, required: true, ref: "Post"}],
    user: [{type: Schema.Types.ObjectId, required: true, ref: "User"}]
  });

// Export model
module.exports = mongoose.model("Comment", CommentSchema);