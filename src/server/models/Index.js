const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    port: dbConfig.PORT,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.sequelize = Sequelize;
db.sequelize = sequelize;

sequelize.sync();

db.user = require("./UserModel")(sequelize, Sequelize);
db.kelas = require("./KelasModel")(sequelize, Sequelize);
db.modul = require("./ModulModel")(sequelize, Sequelize);
db.soal = require("./SoalModel")(sequelize, Sequelize);
db.soalcontent = require("./SoalContentModel")(sequelize, Sequelize);
db.order = require("./OrderModel")(sequelize, Sequelize);

module.exports = db;