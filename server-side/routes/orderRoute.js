const express = require("express");
const router = express.Router();
const orders = require("../controllers/orderController");
const getOrders = require("../controllers/orderController");

router.post("/order", orders.createOrder);
router.get("/find/:userToken", getOrders.getOrders);
module.exports = router;
