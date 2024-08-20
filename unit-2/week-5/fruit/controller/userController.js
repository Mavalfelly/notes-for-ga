const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get("/signup", (req, res) => {
    res.render("user/signup.ejs");
});

router.get("/login", (req, res) => {
    res.render("user/login.ejs");
});


module.exports = router;