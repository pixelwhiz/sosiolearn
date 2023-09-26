const db = require("../models");
const {generateKey} = require("crypto");
const {Op} = require("sequelize");
const path = require("path");
const fs = require("fs");
const Soal = db.soal;
const Random = require("../middlewares/Random");

exports.create = async (req, res) => {
    try {
        const { name, description, divisi, classname } = req.body;

        if (!name || !description || !divisi || !classname) {
            return res.status(500).send({ status: false, message: "Internal Server Error" });
        }

        const randomValue = Math.random().toString(35).substring(5);
        const questionkey = randomValue.slice(0, 50);

        await Soal.create({
            id: Random.randomId(),
            name: name,
            description: description,
            divisi: divisi,
            classname: classname,
            questionkey: questionkey
        });

        res.status(200).send({ status: true, message: "Soal berhasil di tambahkan" });

    } catch (err) {
        console.log("Internal Server Error: ", err.message);
        return res.status(500).send({ status: false, message: `Internal Server Error: ${err.message}` });
    }
}

exports.getAllData = async (req, res) => {
    try {
        const allSoal = await Soal.findAll();
        const soalData = allSoal.map(soal => ({
            id: soal.id,
            name: soal.name,
            description: soal.description,
            divisi: soal.divisi,
            classname: soal.classname,
            createdAt: soal.createdAt,
        }));

        res.json(soalData);
    } catch (err) {
        console.log("Internal Server Error: ", err.message);
        return res.status(500).send({ status: false, message: `Internal Server Error: ${err.message}` });
    }
}

exports.delete = async (req, res) => {
    try {
        const { id } = req.body;
        const existingSoal = await Soal.findOne({
            where: {
                id: {
                    [Op.eq]: id,
                },
            },
        });

        if (!existingSoal) {
            return res.status(404).json({ error: "Soal tidak ditemukan" });
        }

        await Soal.destroy({
            where: {
                id: {
                    [Op.eq]: id,
                },
            },
        });
        res.status(200).json({ status: true, message: "Soal berhasil di hapus" });
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
        console.log("Error: ", err.message);
    }
};

exports.edit = async (req, res) => {
    try {
        const { name, description, classname, divisi } = req.body;
        const { id } = req.params;

        if (!id) {
            return res.status(400).send({ status: false, message: "Id not found" });
        }

        const existingSoal = await Soal.findOne({
            where: {
                id: {
                    [Op.eq]: id,
                },
            },
        });

        if (!existingSoal) {
            return res.status(400).send({ status: false, message: "Soal is not defined" });
        }

        await Soal.update(
            {
                name: name,
                description: description,
                classname: classname,
                divisi: divisi,
            },
            {
                where: {
                    id: id,
                },
            }
        );

        res.status(200).send({ status: true, message: "Updated successfully" });
    } catch (err) {
        console.log(`Internal Server Error: ${err.message}`);
        res.status(500).send({ status: false, message: `Internal Server Error: ${err.message}` });
    }
};