const express = require("express");
const router = express.Router();

const SiswaController = require("../controllers/SiswaController");

router.get("/create", SiswaController.upload);
router.get("/get", SiswaController.getAllData);
router.get("/delete", SiswaController.delete);
router.get("/update", SiswaController.update);

module.exports = router;