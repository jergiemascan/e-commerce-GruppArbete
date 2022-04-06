const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const catchAsync = require("../utility/catchAsync");

module.exports.register = catchAsync(async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const newUser = await User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: hashedPassword,
    confirmPassword: hashedPassword,
  });
  const fullName = `${req.body.firstname} ${req.body.lastname}`;
  res.status(201).json({
    status: "success",
    user: newUser._id,
    fullName,
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
  const fullName = `${user.firstname} ${user.lastname}`;
  res.status(200).json({
    status: "success",
    user: user._id,
    fullName,
    message: "Welcome,you have logged in!",
  });
});
