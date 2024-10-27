const express = require('express');
const router = express.Router();
const contenidoController = require('../controllers/contenidoController');

// Rutas contenido
router.get("/listar-contenidos", contenidoController.getAllContenidos);
router.get("/contenido/:id", contenidoController.getContenidoById);
router.post("/agregar-contenido", contenidoController.createContenido);

router.put("/modificar-contenido/:id", contenidoController.updateContenido);
router.delete("/borrar-contenido/:id", contenidoController.deleteContenido);

module.exports = router;
