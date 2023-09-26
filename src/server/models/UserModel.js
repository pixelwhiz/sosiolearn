const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("user", {
        id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true, allowNull: false },
        username: { type: Sequelize.STRING, allowNull: false, unique: true },
        name: { type: Sequelize.STRING, allowNull: false },
        email: { type: Sequelize.STRING, allowNull: false, unique: true },
        password: { type: Sequelize.STRING, allowNull: false },
        currentClassId: { type: Sequelize.STRING, allowNull: true, defaultValue: null },
        currentClassName: { type: Sequelize.STRING, allowNull: true, defaultValue: null },
        createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
        updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
    }, {
        tableName: "user"
    });

    user.associate = (models) => {
        user.belongsTo(models.kelas, {
            foreignKey: "currentClassId",
            as: "currentClass",
        });
    };

    return user;
};
