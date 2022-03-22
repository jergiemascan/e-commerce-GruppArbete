const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    trim: true,
    required: [true, "First name is required"],
  },
  lastname: {
    type: String,
    trim: true,
    required: [true, "Last name is required"],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: false,
    minlength: 5,
  },
  confirmPassword: {
    type: String,
    required: ["Confirm your password"],
    select: false,
    validate: {
      validator: function (match) {
        return match === this.password;
      },
      message: "Passwords do not match.",
    },
  },
});

UserSchema.methods.comparePassword = async function (
  enteredPassword,
  userPassword
) {
  return await bcrypt.compare(enteredPassword, userPassword);
};

module.exports = mongoose.model("User", UserSchema);
