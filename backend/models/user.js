const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true, maxLength: 64 },
    email: { type: String, required: true, maxLength: 254 }, // Fun fact this is the maximum length an email can possibly have
    password: { type: String, required: true, maxLength: 32 },
  });

// Export model
module.exports = mongoose.model("User", UserSchema);