const db = require("../models");
const kelas = db.kelas;
const user = db.user;
const modul = db.modul;
const axios = require("axios");
const fs = require('fs').promises;
const fsPromises = require('fs/promises');
const path = require('path');
const { Op, Sequelize} = require("sequelize");

exports.create = async (req, res) => {
    try {
        const { id, name, maxsiswa } = req.body;
        if (!id || !name || !maxsiswa) {
            return res.status(400).json({ error: "ID dan Nama tidak boleh kosong" });
        }
        const existingKelas = await kelas.findOne({
            where: {
                id: {
                    [Op.eq]: id,
                },
            },
        });

        if (existingKelas) {
            return res.status(400).json({ error: "ID Sudah ada pada tabel 'kelas'" });
        }

        const existingKelasName = await kelas.findOne({
            where: {
                name: {
                    [Op.eq]: name,
                },
                name: name,
            },
        });

        if (existingKelasName) {
            return res.status(400).json({ error: "Nama sudah terdaftar" });
        }

        await kelas.create({
            id: id,
            name: name,
            total_students: 0,
            total_max_students: maxsiswa,
        });
        res.status(200).json({ success: "Data Berhasil Ditambahkan" });
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
        console.log("Error: ", err.message);
    }
};

exports.getAllData = async (req, res) => {
    try {
        const allKelas = await db.kelas.findAll();
        const kelasData = allKelas.map(kelas => ({
            id: kelas.id,
            name: kelas.name,
            total_students: kelas.total_students,
            total_max_students: kelas.total_max_students,
            createdAt: kelas.createdAt,
            updatedAt: kelas.updatedAt
        }));
        res.json(kelasData);
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
        console.log("Error: ", err.message);
    }
};

exports.getAllDataCount = async (req, res) => {
    try {
        const allKelas = await db.kelas.findAndCountAll();
        res.json(allKelas);
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
        console.log("Error: ", err.message);
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.body;
        const existingKelas = await kelas.findOne({
            where: {
                id: {
                    [Op.eq]: id,
                },
            },
        });
        if (!existingKelas) {
            return res.status(404).send({ error: "Kelas tidak ditemukan" });
        }

        await kelas.destroy({
            where: {
                id: {
                    [Op.eq]: id,
                },
            },
        });

        const modulsToDelete = await modul.findAll({
            where: {
                classname: existingKelas.name,
            },
        });

        await Promise.all(modulsToDelete.map(async (modul) => {
            try {
                const filepath = path.join(__dirname, `../db/admin/modules/${modul.classname}`, modul.filename);
                await fs.unlinkSync(filepath);
                await modul.destroy({
                    where: {
                        classname: existingKelas.name
                    },
                });
            } catch (error) {
                console.log("Error deleting modul:", error.message);
            }
        }));

        const userToUpdate = await user.findAll({
            where: { currentClassId: id }
        });

        await Promise.all(userToUpdate.map( async (u) => {
            await u.update({ currentClassId: null, currentClassName: null });
        }));

        res.status(200).send({ success: "Data Berhasil Dihapus" });
    } catch (err) {
        res.status(500).send({ error: "Internal Server Error" });
        console.log("Error: ", err.message)                 ;
    }
};


exports.edit = async (req, res) => {
    try {
        const { id, name, maxsiswa } = req.body;

        if (!id || !name) {
            return res.status(400).send({ error: "Id dan Nama tidak ada" });
        }

        const existingKelas = await kelas.findOne({
            where: {
                id: {
                    [Op.eq]: id,
                },
            },
        });

        if (!existingKelas) {
            return res.status(404).json({ error: "Kelas tidak ditemukan" });
        }

        const classWithSameName = await kelas.findOne({
            where: { name: name },
        });

        if (classWithSameName) {
            return res.status(500).send({ status: false, message: "Classname is Already Exists!" });
        }

        const updatedData = {
            name: name,
            total_max_students: maxsiswa
        };

        await kelas.update(updatedData, {
            where: {
                id: {
                    [Op.eq]: id,
                },
            },
        });

        const userToUpdate = await user.findAll({
            where: { currentClassId: id }
        });

        await Promise.all(userToUpdate.map(async (u) => {
            await u.update({ currentClassName: name });
        }));

        const existingModuls = await modul.findAll({
            where: {
                classname: existingKelas.name,
            },
        });

        await Promise.all(existingModuls.map(async (modulItem) => {
            const oldModulPath = modulItem.path;
            const newModulPath = oldModulPath.replace(existingKelas.name, name);

            const moduleFolderPath = path.join(__dirname, `../db/admin/modules/${existingKelas.name}`);
            const dirContents = await fs.readdir(moduleFolderPath);

            if (dirContents.length === 0) {
                await fs.rmdir(moduleFolderPath);
            }

            const oldFolderPath = path.join(__dirname, `../db/admin/modules/${existingKelas.name}`);
            const newFolderPath = path.join(__dirname, `../db/admin/modules/${name}`);
            await fsPromises.rename(oldFolderPath, newFolderPath);

            await modulItem.update({
                classname: name,
                path: newModulPath,
            });
        }));

        res.status(200).json({ status: true, success: true });
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
        console.log("Error: ", err.message);
    }
};