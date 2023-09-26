const db = require("../models");
const User = db.user;
const Kelas = db.kelas;
const Admin = db.admin;
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

const secretKey = require("../config/secret_key.js");

exports.register = async (req, res) => {
    const { username, name, email, password, courseid} = req.body;
    const id = uuidv4();
    try {
        if (!username || !name || !email || !password) {
            return res.status(400).send({ error: "Bad Request", message: "Username, name, email, and password are required fields." });
        }

        const existingUser = await User.findOne({
            where: {
                id: {
                    [Op.eq]: id,
                },
            },
        });

        if (existingUser) {
            return res.status(400).send({ status: false, message: "Failure" });
        }

        const existingUsername = await User.findOne({
            where: {
                username: {
                    [Op.eq]: username,
                },
            },
        });

        if (existingUsername) {
            return res.status(400).send({ status: false, message: "Username is Already Exists" });
        }

        const existingEmail = await User.findOne({
            where: {
                email: {
                    [Op.eq]: email,
                },
            },
        });

        if (existingEmail) {
            return res.status(400).send({ status: false, message: "Email is Already Exists" });
        }

        const existingClass = await Kelas.findOne({
            where: {
                id: {
                    [Op.eq]: courseid,
                },
            },
        });

        if (!existingClass) {
            return res.status(400).send({ status: false, message: "Kelas not found" });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = await User.create({ id, username, name, email, password: hashedPassword, currentClassId: courseid, currentClassName: existingClass.name });
        res.status(200).send({ status: true, message: `Registered successfully` });
    } catch (err) {
        console.error("Error during registration:", err.message);
        res.status(500).send({ status: false, message: `Error during registration: ${err.message}` });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({
            where: {
                email
            }
        });
        if (!user) {
            return res.status(404).send({ status: false, message: "Email not found" });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).send({ error: "Invalid credentials", message: "Invalid credentials" });
        }
        const token = jwt.sign({ user }, `${secretKey.KEY}`);
        res.cookie('jwt', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
        res.status(200).send({ status: true, message: "Login successfully"});
    } catch (err) {
        console.error("Error during login:", err.message);
        res.status(500).json({ error: "Internal Server Error", message: err.message });
    }
};

exports.logout = async (req, res) => {
    res.cookie('jwt', '', { maxAge: 0 });
    res.status(200).send({ status: true, message: "Logout Successfully" });
};

exports.registerAdmin = async (req, res) => {
    try {
        const { username, name, email, password } = req.body;
        const existingAdmin = await Admin.findOne({
            where: {
                [Op.or]: [
                    { username: username },
                    { email: email }
                ]
            }
        });

        if (existingAdmin) {
            return res.status(400).json({ message: "Username or email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = await Admin.create({
            id: uuidv4(),
            username: username,
            name: name,
            email: email,
            password: hashedPassword,
        });

        return res.status(200).json({ message: "Admin registered successfully" });
    } catch (error) {
        console.error("Error in register:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
},

exports.loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === "mdafftfa" && password === "#DaffaGila123") {
            res.status(200).send({ status: true, message: "login berhasil"});
        } else {
            res.status(401).send({ status: false, message: "Invalid Credentials" });
        }
    } catch (error) {
        res.status(500).send({ status: false, message: "Invalid Credentials" });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const allData = await db.user.findAndCountAll();
        res.send(allData);
    } catch (err) {
        console.log("Internal Server Error: ", err.message);
    }
};

exports.data = async (req, res) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(400).send({ status: false, message: "Unauthorized" });
        }

        const authenticated = jwt.verify(token, secretKey.KEY);

        if (!authenticated) {
            return res.status(400).send({ status: false, message: "Unauthorized" });
        }

        const user = await User.findOne({
            where: {
                id: authenticated.user.id
            }
        });

        if (!user) {
            return res.status(404).send({ status: false, message: "User not found" });
        }

        console.log(`${user.email} is Connected`);
        res.status(200).send({ status: true, user });
    } catch (err) {
        console.error("Error during authentication:", err.message);
        return res.status(401).json({ message: "Unauthenticated" });
    }
};
