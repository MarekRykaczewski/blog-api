const passport = require("passport");
const User = require("../models/user")
const bcrypt = require('bcryptjs');

exports.signup_post = async (req, res, next) => {
    try {

        const password = req.body.password
        
        bcrypt.hash(password, 10, async (err, hashedPassword) => {
            if (err) {
                return next(err)
            }

            const user = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword
            })

            const result = await user.save()
            res.end()
        })
    } catch (err) {
        return next(err)
    }
}

exports.signin_post = async (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        // Handle error
        return next(err);
      }
      
      if (!user) {
        // Authentication failed
        // Redirect or send an error response
        return res.status(401).json({ message: "Authentication failed" });
      }
      
      // Authentication succeeded
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        
        // Send a success response
        return res.status(200).json({ message: "Authentication successful" });
      });
    })(req, res, next);
  };