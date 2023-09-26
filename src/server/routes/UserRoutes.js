const express = require("express");
const router = express.Router();
const tokens = require("../middlewares/Tokens");
const axios = require("axios");

const UserController = require("../controllers/UserController");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);
router.post("/authentication/admin/register", UserController.registerAdmin);
router.post("/authentication/admin/login", UserController.loginAdmin);
router.get("/data", UserController.data);
router.get("/get", UserController.getAllUsers);

module.exports = router;