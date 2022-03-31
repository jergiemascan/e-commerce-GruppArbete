const orderSchema = require("../models/orderSchema");
const catchAsync = require("../utility/catchAsync");

module.exports.createOrder = catchAsync(async (req, res) => {
  ///Calculating total price
  const productsArray = req.body.products;

  const totalamount = productsArray.reduce((acc, ele) => {
    acc += parseInt(ele.quantity) * parseInt(ele.price);
    return acc;
  }, 0);
  req.body.totalAmount = totalamount;
  const order = await orderSchema.create(req.body);
  const newOrder = await order.save();
  res.status(201).json({
    status: "success",
    data: {
      Orders: order,
    },
    message: "Order confirmed!",
  });
  console.log("result", newOrder);
  return;
});

// hämtar users history of orders

module.exports.getOrders = catchAsync(async (req, res) => {
  const getOrders = await orderSchema.find({ userToken: req.params.userToken });
  res.status(201).json({
    status: "success",
    data: getOrders,
    message: "Fetched orders successfully",
  });
  return;
});
