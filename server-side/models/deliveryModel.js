const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
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
});

module.exports = mongoose.model("Delivery", deliverySchema);
