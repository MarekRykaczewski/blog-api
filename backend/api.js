const express = require("express");
const router = express.Router();

// Require controller modules

const post_controller = require('./controllers/postController')

router.get("/posts", post_controller.posts_get)

router.get("/posts/:id", post_controller.post_get)

router.post("/post", post_controller.post_create)

module.exports = router;
