const express = require("express");
const database = require("./src/config/database");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

database.db
  .sync({ force: true })
  .then((_) => {
    console.info("Banco conectado com sucesso");
    app.listen(PORT, () => {
      console.info(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((e) => {
    console.error(`Conexão falhou: ${e}`);
  });
