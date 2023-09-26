const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    const soalcontent = sequelize.define('soalcontent', {
        id: {
            type: Sequelize.STRING,
            defaultValue: Sequelize.STRING,
            primaryKey: true,
            allowNull: false,
        },
        question: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        optionA: {
            type: Sequelize.STRING,
            allowNull: false
        },
        optionB: {
            type: Sequelize.STRING,
            allowNull: false
        },
        optionC: {
            type: Sequelize.STRING,
            allowNull: false
        },
        optionD: {
            type: Sequelize.STRING,
            allowNull: false
        },
        correctAnswer: {
            type: Sequelize.ENUM('A', 'B', 'C', 'D'),
            allowNull: false
        },
        image: {
            type: Sequelize.STRING,
            allowNull: true
        },
        questionkey: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
        tableName: "soalcontent"
    });

    soalcontent.associate = (models) => {
        soalcontent.belongsTo(models.soal, { foreignKey: 'questionkey', as: 'soal' });
    };

    return soalcontent;
};
