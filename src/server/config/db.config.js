module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "#DaffaGila123",
    DB: "postgres",
    DIALECT: "postgres",
    PORT: 5433,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};