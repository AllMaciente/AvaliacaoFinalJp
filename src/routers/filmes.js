const express = require("express");
const ControllerFilme = require("../controllers/filmes");

const router = express.Router();

router.get("/", ControllerFilme.GetFilmes);
router.get("/:id", ControllerFilme.GetFilmeById);
router.post("/", ControllerFilme.CreateFilme);
router.put("/:id", ControllerFilme.UpdateFilme);
router.delete("/:id", ControllerFilme.DeleteFilme);

module.exports = router;
