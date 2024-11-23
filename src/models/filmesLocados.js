const database = require("../config/database");

class ModelFilmeLocado {
  constructor() {
    this.model = database.db.define("filmes_Locados", {
      id: {
        type: database.db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      idFilme: {
        type: database.db.Sequelize.INTEGER,
      },
      idCliente: {
        type: database.db.Sequelize.INTEGER,
      },
      dataLocacao: {
        type: database.db.Sequelize.STRING,
      },
      dataDevolucao: {
        type: database.db.Sequelize.STRING,
        allowNull: true,
      },
    });
  }
}

module.exports = new ModelFilmeLocado().model;
