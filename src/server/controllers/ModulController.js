const db = require("../models");
const Modul = db.modul;
const Kelas = db.kelas;
const { v4: uuidv4 } = require("uuid");
const {Op} = require("sequelize");
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

exports.create = async (req, res) => {
    try {
        const { id, name, description, classname } = req.body;
        const { filename, mimetype, path } = req.file;

        if (!req.file) {
            return res.status(500).send({ status: false, message: "Tambahkan File PDF" });
        }

        if (!id || !name || !description || !classname || classname === null) {
            return res.status(500).send({ status: false, message: "Lengkapi data terlebih dahulu" });
        }

        const existingModul = await Modul.findOne({
            where: {
                id: {
                    [Op.eq]: id,
                },
            },
        });

        if (existingModul) {
            return res.status(400).send({ status: false, message: "Modul is Already Exists" });
        }

        const data = await Modul.create({
            id: id,
            classname: classname,
            name: name,
            description: description,
            filename: filename,
            filetype: mimetype,
            path: path,
        });

        res.status(200).json({ status: true, message: "Success"});
    } catch (err) {
        console.log("Internal Server Error: ", err.message);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
};

exports.download = async (req, res) => {
    try {
        const { id, classname, filename } = req.params;
        const filePath = `db/admin/modules/${classname}/${filename}`;
        const fileData = fs.readFileSync(filePath);
        res.status(200).send(fileData);
    } catch (err) {
        res.status(500).send({ status: false, message: 'Internal Server Error' });
    }
};

exports.getAllData = async (req, res) => {
    try {
        const allModul = await Modul.findAll();
        const modulData = allModul.map(modul => ({
            id: modul.id,
            classname: modul.classname,
            name: modul.name,
            description: modul.description,
            filename: modul.filename,
            createdAt: modul.createdAt,
        }));

        res.json(modulData);
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
        console.log("Error: ", err.message);
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.body;
        const existingModul = await Modul.findOne({
            where: {
                id: {
                    [Op.eq]: id,
                },
            },
        });
        if (!existingModul) {
            return res.status(404).json({ status: false, message: "Modul not found" });
        }

        const file = await Modul.findByPk(id);
        if (!file) {
            return res.status(404).send({ status: false, message: "File not found" });
        }

        const filepath = path.join(__dirname, `../db/admin/modules/${file.classname}`, file.filename);
        await fs.unlink(filepath, async (err) => {
            if (err) {
                console.log("Error deleting file: ", err);
                res.status(500).send({ status: false, message: `Error deleting file ${err.message}` });
            } else {
                await Modul.destroy({
                    where: {
                        id: {
                            [Op.eq]: id,
                        },
                    },
                });
                res.status(200).send({ status: true, message: "Data Berhasil Dihapus" });
            }
        });
    } catch (err) {
        res.status(500).send({ status: false, message: `Internal Server Error: ${err.message}` });
        console.log("Error: ", err.message);
    }
};

exports.edit = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;

        if (!id || !name || !description) {
            return res.status(500).send({ status: false, message: "Form is Not completed" });
        }

        const existingModul = await Modul.findOne({
            where: {
                id: {
                    [Op.eq]: id,
                },
            },
        });

        if (!existingModul) {
            return res.status(404).send({ status: false, message: "Modul tidak ditemukan" });
        }

        await Modul.update(
            {
                name: name,
                description: description,
            },
            {
                where: {
                    id: id,
                },
            }
        );

        res.status(200).send({ status: true, message: "Successfully edit Modul" });
    } catch (err) {
        res.status(500).send({ status: false, message: `Internal Server Error: ${err.message}` });
    }
};