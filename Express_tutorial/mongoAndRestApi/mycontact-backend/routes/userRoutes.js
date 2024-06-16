const express = require("express");
const { registerUser, loginUser, currentUser } = require("../controllers/userContoller");
const validateToken = require("../middleware/validateTokenHandler");


const router = express.Router();

router.post("/register", require(registerUser))

router.post("/login", require(loginUser))

router.get("/current", validateToken, require(currentUser))

module.exports = router