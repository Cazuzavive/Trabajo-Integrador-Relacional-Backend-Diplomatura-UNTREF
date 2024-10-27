const express = require('express');
const router = express.Router();
const actorContenidoController = require('../controllers/actor_contenidoController');

// Obtener todas las películas de un actor
router.get('/actor/:actorId/contenidos', actorContenidoController.listarPeliculasPorActor);

// Obtener todos los actores de una película
router.get('/contenido/:contenidoId/actores', actorContenidoController.listarActoresPorPelicula);

module.exports = router;
