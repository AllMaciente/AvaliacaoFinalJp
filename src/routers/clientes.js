const express = require("express");
const ControllerCliente = require("../controllers/clientes");

const router = express.Router();

router.get("/", ControllerCliente.GetClients);
router.get("/:id", ControllerCliente.GetClienteById);
router.post("/", ControllerCliente.CreateCliente);
router.put("/:id", ControllerCliente.UpdateCliente);
router.delete("/:id", ControllerCliente.DeleteCliente);

module.exports = router;
