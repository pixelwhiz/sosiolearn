const express = require("express");
const router = express.Router();

router.use("/users", require('./UserRoutes'));

router.use("/kelas", require('./KelasRoutes'));
router.use("/modul", require('./ModulRoutes'));
router.use("/soal", require('./SoalRoutes'));
router.use("/order", require('./OrderRoutes'));

module.exports = router;