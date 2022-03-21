const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController.js");

router.post("/createProduct", productController.createProduct);

module.exports = router;
