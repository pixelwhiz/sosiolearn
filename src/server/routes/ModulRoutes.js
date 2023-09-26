const express = require("express");
const router = express.Router();

const ModulController = require("../controllers/ModulController");
const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
    destination: async (req, file, cb) => {
        const folderPath = `./db/admin/modules/${req.body.classname}`;

        if (!req.body.classname || req.body.classname === "null" || req.body.classname === null) {
            cb(new Error("Classname is missing"));
            return false;
        }

        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }

        cb(null, folderPath);
    },
    filename: async (req, file, cb) => {
        const filePath = `./db/admin/modules/${req.body.classname}/${file.originalname}`;
        if (fs.existsSync(filePath)) {
            cb(new Error("The file name is Already Exists"));
        }
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const pdf = ["application/pdf"];
        if (pdf.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Invalid file type. Only PDF files are allowed"));
        }
    }
});

router.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        res.status(500).json({ error: "An error occurred while uploading the file." });
    } else {
        res.status(400).json({ error: err.message });
    }
});

router.get("/download/:classname/:filename", ModulController.download);
router.post("/create", upload.single("file"), ModulController.create);
router.get("/get", ModulController.getAllData);
router.post("/delete", ModulController.delete);
router.post("/edit/:id", ModulController.edit);

module.exports = router;