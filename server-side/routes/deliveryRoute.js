const express = require("express");
const router = express.Router();
const deliveryController = require("../controllers/deliveryMethodController.js");

router.post("/createDelivery", deliveryController.createDelivery);
router.get("/deliveries/:id", deliveryController.getDelivery);
router.get("/deliveries", deliveryController.getDeliveries);

module.exports = router;
