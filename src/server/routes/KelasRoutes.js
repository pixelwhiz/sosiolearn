const express = require("express");
const router = express.Router();

const KelasController = require("../controllers/KelasController");

router.post("/create", KelasController.create);
router.get("/get", KelasController.getAllData);
router.get("/getcount", KelasController.getAllDataCount);
router.post("/delete", KelasController.delete);
router.post("/edit", KelasController.edit);

module.exports = router;