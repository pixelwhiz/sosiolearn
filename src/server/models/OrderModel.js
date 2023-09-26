const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const order = sequelize.define("order", {
        id: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        response_midtrans: {
            type: Sequelize.TEXT,
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
        tableName: 'order'
    });

    return order;
};
