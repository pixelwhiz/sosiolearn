const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/Index");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const secret_key = require("./config/secret_key");
const passport = require("passport");
const multer = require("multer");

var corsOptions = {
    credentials: true,
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200
};

app.use(
    session({
        secret: `${secret_key.SESSION}`,
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false,
            httpOnly: true,
            maxAge: 3600000000,
        },
    })
);

app.use("./db", express.static('db'));

app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(express.static('db'));

app.get("/", (req, res) => {
    res.json({ message: "Welcome" });
});

const db = require("./models");

app.use("/api", routes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})