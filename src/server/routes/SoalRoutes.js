const express = require("express");
const router = express.Router();

const SoalController = require("../controllers/SoalController");

router.post("/create", SoalController.create);
router.get("/get", SoalController.getAllData);
router.post("/delete", SoalController.delete);
router.post("/edit/:id", SoalController.edit);

module.exports = router;