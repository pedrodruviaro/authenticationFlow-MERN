const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
    validateRegister,
    validateLogin,
} = require("../services/validations/userValidations");

// REGISTER
router.post("/register", async (req, res) => {
    // errors on input
    const error = validateRegister(req.body);
    if (error) return res.status(401).json(error);

    // checking in the db
    const user = await User.findOne({ email: req.body.email });
    if (user)
        return res
            .status(401)
            .json({ error: "A user with this email adress already exists!" });

    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });
        const savedUser = await newUser.save();
        const { password, ...rest } = savedUser._doc;
        return res.status(200).json({ ...rest });
    } catch (err) {
        return res.status(500).json({ error: "Something gone wrong..." });
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    //errors on input
    const error = validateLogin(req.body);
    if (error) return res.status(401).json(error);

    // checking if user exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(404).json({ error: "User not found!" });
    }

    // checking password
    const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
    );
    if (!validPassword)
        return res.status(404).json({ error: "Wrong password!" });

    // all good, send token
    const token = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET, {
        expiresIn: 86400,
    });
    const { password, ...rest } = user._doc;
    return res.status(200).json({ token, ...rest });
});
module.exports = router;
