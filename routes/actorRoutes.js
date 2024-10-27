const express = require('express');
const router = express.Router();
const actorController = require('../controllers/actorController');

// Ruta para agregar un actor individual
router.post('/agregar-actor', actorController.agregarActor);

// Ruta para listar todos los actores
router.get('/listar-actores', actorController.listarActores);

// Ruta para obtener un actor por ID
router.get('/:id', actorController.getActorById);

// Ruta para actualizar un actor por ID
router.put('/modificar-actor/:id', actorController.modificarActor);

// Ruta para borrar un actor por ID
router.delete('/borrar-actor/:id', actorController.borrarActor);

module.exports = router;
