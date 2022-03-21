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
  photo: {
    type: String,
    // required: [true,'Please add a product photo']
  },
});

module.exports = mongoose.model("Product", productSchema);
