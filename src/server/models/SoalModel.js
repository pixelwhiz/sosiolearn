const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const soal = sequelize.define('soal', {
        id: {
            type: Sequelize.STRING,
            defaultValue: Sequelize.STRING,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        divisi: {
            type: Sequelize.STRING,
            allowNull: false
        },
        classname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        questionkey: {
            type: Sequelize.STRING,
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW,
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW,
        },
    }, {
        tableName: "soal"
    });

    soal.associate = (models) => {
        soal.hasMany(models.soalcontent, { foreignKey: 'questionkey', as: 'contents', onDelete: 'CASCADE' });
    };

    return soal;
};