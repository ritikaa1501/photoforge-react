// normal method
// const express = require("express")
// const router = express.Router()

const { login, signup } = require("../controllers/authController");

// another method
const router = require("express").Router();

router.post("/login", login);
router.post("/signup", signup);

module.exports = router;