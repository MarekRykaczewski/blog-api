const express = require("express");
const router = express.Router();

// Require controller modules

const auth_controller = require('./controllers/authController')
const post_controller = require('./controllers/postController')

// Auth Routes

router.post("/users", auth_controller.signup_post)

router.post("/login", auth_controller.signin_post)

// Post Routes

router.get("/posts", post_controller.posts_get)

router.get("/posts/:id", post_controller.post_get)

router.post("/post", post_controller.post_create)

router.delete("/posts/:id", post_controller.post_delete)

router.put("/posts/:id", post_controller.post_update)

module.exports = router;
