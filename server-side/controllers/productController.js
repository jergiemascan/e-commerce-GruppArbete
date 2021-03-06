const productSchema = require("../models/productModel");
const catchAsync = require("../utility/catchAsync");

module.exports.createProduct = catchAsync(async (req, res) => {
  const product = await productSchema.create({
    name: req.body.name,
    price: req.body.price,
    desc: req.body.desc,
    photo: req.body.photo,
  });
  const response = await product.save();

  res.status(201).json({
    status: "success",
    data: {
      product: product,
    },
  });
  return;
});

module.exports.getProducts = catchAsync(async (req, res) => {
  try {
    res.json(await productSchema.find());
  } catch (error) {
    res.json({ message: error });
  }
});
module.exports.getProduct = catchAsync(async (req, res) => {
  try {
    res.json(await productSchema.findById(req.params.id));
  } catch (error) {
    res.json({ message: error });
  }
});
