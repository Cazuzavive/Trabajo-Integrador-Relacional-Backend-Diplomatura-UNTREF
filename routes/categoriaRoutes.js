const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoriaController");

router.get("/listar-categorias", categoriaController.getAllCategorias);
router.get("/categoria/:id", categoriaController.getCategoriaById);
router.post("/agregar-categoria", categoriaController.createCategoria);
router.put("/modificar-categoria/:id", categoriaController.updateCategoria);
router.delete("/borrar-categoria/:id", categoriaController.deleteCategoria);

module.exports = router;
