const express = require("express");
const database = require("./src/config/database");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const routerCliente = require("./src/routers/clientes");

const app = express();

app.use(express.json());

app.use("/cliente", routerCliente);

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
