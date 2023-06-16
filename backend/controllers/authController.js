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
                password: req.body.password
            })

            const result = await user.save()
            res.end()
        })
    } catch (err) {
        return next(err)
    }
}