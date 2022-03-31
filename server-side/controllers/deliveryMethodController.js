const deliverySchema = require("../models/deliveryModel");
const catchAsync = require("../utility/catchAsync");

module.exports.createDelivery = catchAsync(async (req, res) => {
  const delivery = await deliverySchema.create({
    name: req.body.name,
    price: req.body.price,
  });
  const response = await delivery.save();

  res.status(201).json({
    status: "success",
    data: {
      data: delivery,
    },
  });
  console.log("result", response);
  return;
});

module.exports.getDeliveries = catchAsync(async (req, res) => {
  try {
    res.json(await deliverySchema.find());
  } catch (error) {
    res.json({ message: error });
  }
});
module.exports.getDelivery = catchAsync(async (req, res) => {
  try {
    res.json(await deliverySchema.findById(req.params.id));
  } catch (error) {
    res.json({ message: error });
  }
});
