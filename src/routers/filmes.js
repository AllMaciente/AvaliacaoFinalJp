const express = require("express");
const ControllerFilme = require("../controllers/filmes");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/", auth, ControllerFilme.CreateFilme);
router.get("/", auth, ControllerFilme.GetFilmes);
router.get("/:id", auth, ControllerFilme.GetFilmeById);
router.put("/:id", auth, ControllerFilme.UpdateFilme);
router.delete("/:id", auth, ControllerFilme.DeleteFilme);

module.exports = router;
