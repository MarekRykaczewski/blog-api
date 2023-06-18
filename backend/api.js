const express = require("express");
const router = express.Router();
const passport = require('passport');

// Require controller modules

const auth_controller = require('./controllers/authController')
const post_controller = require('./controllers/postController')
const comment_controller = require('./controllers/commentController')

// Auth Routes

router.post("/signup", auth_controller.signup_post)

router.post("/login", auth_controller.signin_post)

// Post Routes

router.get("/posts", post_controller.posts_get)

router.get("/posts/:id", post_controller.post_get)

router.post("/post", passport.authenticate('jwt', { session: false }), post_controller.post_create)

router.delete("/posts/:id", passport.authenticate('jwt', { session: false }), post_controller.post_delete)

router.put("/posts/:id", passport.authenticate('jwt', { session: false }), post_controller.post_update)

// Comment Routes

router.post('/posts/:id/comment', comment_controller.comment_post)

router.delete('/posts/:id/comments/:commentId', comment_controller.comment_delete)

router.get('/posts/:id/comments', comment_controller.comments_get)

module.exports = router;
