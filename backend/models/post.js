const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: { type: String, required: true, maxLength: 100 },
    content: { type: String, required: true, maxLength: 2500 }, 
    createdAt: { type: Date, required: true, default: Date.now },
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    comments: [{ type: Map, required: true }],
    published: { type: Boolean, required: true },
  });

// Export model
module.exports = mongoose.model("Post", PostSchema);