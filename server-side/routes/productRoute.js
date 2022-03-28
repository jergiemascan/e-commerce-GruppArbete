const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController.js");
//PATCH - update post, behöver ändra lite i produkterna, priserna är i SEK
//router.get("/createProduct", productController.getProduct);  - -> iom det var här vi skapade POST?

router.post("/createProduct", productController.createProduct);
router.get("/products", productController.getProducts);
router.get("/products/:id", productController.getProduct);

module.exports = router;
