const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userToken: {
      type: String,
      required: true,
    },
    products: {
      type: Array,

      required: true,
    },
    deliveryCost: {
      type: Object,
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
