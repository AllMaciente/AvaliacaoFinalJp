const { Sequelize } = require("sequelize");

class Database {
  constructor() {
    this.init();
  }

  async init() {
    this.db = new Sequelize({
      database: process.env.DB_NAME || "locadora",
      host: process.env.DB_HOST || "localhost",
      username: process.env.DB_USER || "root",
      dialect: process.env.DB_DIALECT || "mysql",
      password: process.env.DB_PASSWORD || "",
      port: process.env.DB_PORT || 3306,
    });
  }
}

module.exports = new Database();
