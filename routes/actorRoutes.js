const express = require('express');
const router = express.Router();
const actorController = require('../controllers/actorController');

/**
 * @swagger
 * /agregar-actor:
 *   post:
 *     summary: Agrega un nuevo actor
 *     tags:
 *       - Actores
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Actor'
 *     responses:
 *       201:
 *         description: Actor agregado exitosamente
 *       400:
 *         description: Error en los datos enviados
 *       500:
 *         description: Error interno del servidor
 */
router.post('/agregar-actor', actorController.agregarActor);

/**
 * @swagger
 * /listar-actores:
 *   get:
 *     summary: Lista todos los actores
 *     tags:
 *       - Actores
 *     responses:
 *       200:
 *         description: Lista de actores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Actor'
 *       500:
 *         description: Error interno del servidor
 */
router.get('/listar-actores', actorController.listarActores);

/**
 * @swagger
 * /{id}:
 *   get:
 *     summary: Obtiene un actor por ID
 *     tags:
 *       - Actores
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID único del actor
 *     responses:
 *       200:
 *         description: Actor encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Actor'
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Actor no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/:id', actorController.getActorById);

/**
 * @swagger
 * /modificar-actor/{id}:
 *   put:
 *     summary: Actualiza un actor por ID
 *     tags:
 *       - Actores
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID único del actor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Actor'
 *     responses:
 *       200:
 *         description: Actor actualizado exitosamente
 *       400:
 *         description: Error en los datos enviados o ID inválido
 *       404:
 *         description: Actor no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/modificar-actor/:id', actorController.modificarActor);

/**
 * @swagger
 * /borrar-actor/{id}:
 *   delete:
 *     summary: Borra un actor por ID
 *     tags:
 *       - Actores
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID único del actor
 *     responses:
 *       200:
 *         description: Actor eliminado exitosamente
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Actor no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete('/borrar-actor/:id', actorController.borrarActor);

module.exports = router;
