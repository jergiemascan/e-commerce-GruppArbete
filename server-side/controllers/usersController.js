const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const catchAsync = require("../utility/catchAsync");
const usersController = require("../controllers/usersController");

module.exports.register = catchAsync(async (req, res) => {
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
      status: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Failure",
    });
  }
});

module.exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(401).json({
      status: "failed",
      message: "Please enter your email and password!",
    });
    return;
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.comparePassword(password, user.password))) {
    res
      .status(401)
      .json({ status: "failed", message: "Incorrect email or password" });
    return;
  }

  res.status(200).json({
    status: "success",
    message: "Welcome,you have logged in!",
  });
});
