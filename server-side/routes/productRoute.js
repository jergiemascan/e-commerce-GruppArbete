const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController.js");

router.post("/createProduct", productController.createProduct);
router.get("/products", productController.getProducts);
router.get("/products/:id", productController.getProduct);

module.exports = router;
