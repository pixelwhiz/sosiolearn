const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const kelas = sequelize.define('kelas', {
        id: { type: Sequelize.STRING, defaultValue: Sequelize.STRING, primaryKey: true, allowNull: false },
        name: { type: Sequelize.STRING, allowNull: false },
        total_students: { type: Sequelize.INTEGER, defaultValue: 0, allowNull: false },
        total_max_students: { type: Sequelize.INTEGER, defaultValue: 30, allowNull: false },
        createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
        updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },

    }, {
        tableName: 'kelas'
    });

    kelas.addHook('beforeUpdate', async (instance, options) => {
        const user = instance.sequelize.models.user;
        if (instance.changed('name')) {
            const [updatedRowCount, updatedRows] = await user.update(
                { currentClassName: instance.name },
                { where: { currentClassId: instance.id } }
            );

            console.log(`Updated ${updatedRowCount} user(s) with new class name: ${instance.name}`);
        }

    });

    kelas.addHook('beforeDestroy', async (instance, options) => {
        const user = instance.sequelize.models.user;
        const modul = instance.sequelize.models.modul;
        await user.update({ currentClassId: null }, {
            where: { currentClassId: instance.id }
        });

        await modul.destroy({
            where: { classname: instance.name }
        });

        await user.update({ currentClassId: null  }, {
            where: { currentClassId: instance.id }
        });
    });

    kelas.associate = (models) => {
        kelas.hasMany(models.user, {
            foreignKey: "currentClassId",
            as: "students"
        });
    };

    return kelas;
};