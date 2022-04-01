const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    productname: {
      type: String,
    },

    price: {
      type: Number,
      required: true,
    },

    deliveryCost: {
      type: Number,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
