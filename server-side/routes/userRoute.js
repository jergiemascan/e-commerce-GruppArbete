const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      firstname: req.body.firstName,
      lastname: req.body.lastName,
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
