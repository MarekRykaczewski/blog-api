const express = require("express");
const router = express.Router();

// Require controller modules

const post_controller = require('./controllers/postController')

router.get("/posts", post_controller.posts_get)

module.exports = router;
