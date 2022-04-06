const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please enter a product name"],
  },
  price: {
    type: Number,
    trim: true,
    required: [true, "Please enter price"],
  },
  desc: {
    type: String,
    trim: true,
    required: [true, "desc"],
  },

  photo: {
    type: String,
  },
});

module.exports = mongoose.model("Product", productSchema);
