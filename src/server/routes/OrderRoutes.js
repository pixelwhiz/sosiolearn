const express = require("express");
const router = express.Router();

const OrderController = require("../controllers/OrderController");

router.post("/charge", OrderController.charge);
router.post("/notifications", OrderController.notifications);

module.exports = router;