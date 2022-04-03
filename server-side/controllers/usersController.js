const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const catchAsync = require("../utility/catchAsync");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

module.exports.register = catchAsync(async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const newUser = await User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: hashedPassword,
    confirmPassword: hashedPassword,
  });
  const token = signToken(newUser._id);
  console.log("new user registered!");
  res.status(201).json({
    status: "success",
    token,
    user: newUser._id,
    data: {
      user: newUser,
    },
  });
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

  ///In place of userId - jwt
  const token = signToken(user._id);
  res.status(200).json({
    status: "success",
    token,
    user: user._id,
    message: "Welcome,you have logged in!",
  });
});
