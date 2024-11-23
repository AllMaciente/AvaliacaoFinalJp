const express = require("express");
const ControllerCliente = require("../controllers/clientes");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/", ControllerCliente.CreateCliente);
router.post("/login", ControllerCliente.Login);

router.get("/", auth, ControllerCliente.GetClients);
router.get("/:id", auth, ControllerCliente.GetClienteById);
router.put("/:id", auth, ControllerCliente.UpdateCliente);
router.delete("/:id", auth, ControllerCliente.DeleteCliente);

module.exports = router;
