const express = require("express");
const ControllerFilme = require("../controllers/filmes");
const ControllerFilmeLocado = require("../controllers/filmesLocados");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/", auth, ControllerFilme.CreateFilme);
router.post("/locar", auth, ControllerFilmeLocado.Locar);
router.post("/devolver", auth, ControllerFilmeLocado.Devolver);

router.get("/", auth, ControllerFilme.GetFilmes);
router.get("/:id", auth, ControllerFilme.GetFilmeById);

router.put("/:id", auth, ControllerFilme.UpdateFilme);
router.delete("/:id", auth, ControllerFilme.DeleteFilme);

module.exports = router;
