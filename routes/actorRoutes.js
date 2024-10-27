const express = require('express');
const router = express.Router();
const actorController = require('../controllers/actorController');


// Ruta para agregar un actor individual
router.post('/agregar-actor', actorController.agregarActor);

// Ruta para agregar múltiples actores (la función está comentada en tu código, pero aquí tienes la ruta)
router.post('/agregar-actores', actorController.agregarActores);

// Ruta para listar todos los actores
router.get('/listar-actores', actorController.listarActores);

//Ruta para obtener un actor por id "getActorById"
router.get('/:id')
// Ruta para actualizar un actor por ID
router.put('/modificar-actor/:id', actorController.modificarActor);

// Ruta para borrar un actor por ID
router.delete('/borrar-actor/:id', actorController.borrarActor);

module.exports = router;
