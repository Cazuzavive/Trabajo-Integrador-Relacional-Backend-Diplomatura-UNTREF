const express = require("express");
const router = express.Router();
const generoController = require("../controllers/generoController");

router.get("/listar-generos", generoController.getAllGeneros);
router.get("/genero/:id", generoController.getGeneroById);
router.post("/agregar-genero", generoController.createGenero);
router.put("/modificar-genero/:id", generoController.updateGenero);
router.delete("/borrar-genero/:id", generoController.deleteGenero);

module.exports = router;
