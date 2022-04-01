const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    products: {
      type: Array,

      required: true,
    },
  },
  {
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
