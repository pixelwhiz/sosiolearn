const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const secretKey = require("../config/secret_key");

exports.verifyToken = (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) {
        return res.status(401).json({ error: "Unauthorized", message: "No token provided" });
    }
    jwt.verify(token, secretKey.KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: "Unauthorized", message: "Invalid token" });
        }
        req.user = decoded;
        next();
    });
};