const express = require("express");
const router = express.Router();
const deliveryController = require("../controllers/deliveryMethodController.js");
//PATCH - update post, behöver ändra lite i produkterna, priserna är i SEK
//router.get("/createProduct", productController.getProduct);  - -> iom det var här vi skapade POST?

router.post("/createDelivery", deliveryController.createDelivery);
router.get("/deliveries/:id", deliveryController.getDelivery);
router.get("/deliveries", deliveryController.getDeliveries);

module.exports = router;
