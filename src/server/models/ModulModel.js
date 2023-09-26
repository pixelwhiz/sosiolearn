const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const modul = sequelize.define('modul', {
        id: {
            type: Sequelize.STRING,
            defaultValue: Sequelize.STRING,
            primaryKey: true,
            allowNull: false,
        },
        classname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        filename: {
            type: Sequelize.STRING,
            allowNull: false
        },
        filetype: {
            type: Sequelize.STRING,
            allowNull: false
        },
        path: {
            type: Sequelize.STRING,
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        }
    }, {
        tableName: 'modul'
    });

    return modul;
};