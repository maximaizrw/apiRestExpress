const express = require("express");
const router = express.Router();
const { register } = require("../controllers/authController");
const { validatorRegister, validatorLogin } = require("../validators/auth");



router.post("/register", validatorRegister, register);


module.exports = router;
