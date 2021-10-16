const router = require("express").Router();
const tokenValidation = require("../services/validations/tokenValidation");

router.get("/notes", tokenValidation, (req, res) => {
    res.send("Hello from notes");
});

module.exports = router;
