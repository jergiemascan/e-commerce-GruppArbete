const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const catchAsync = require("../utility/catchAsync");
const usersController = require("../controllers/usersController");

router.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashedPassword,
      confirmPassword: hashedPassword,
    });
    res.status(201).json({
      status: "Success!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Failure",
    });
  }
});

module.exports = router;
