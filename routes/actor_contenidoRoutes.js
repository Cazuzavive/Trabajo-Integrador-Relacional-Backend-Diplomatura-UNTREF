const express = require('express');
const router = express.Router();
const actorContenidoController = require('../controllers/actor_contenidoController');

/**
 * @swagger
 * /actor/{actorId}/contenidos:
 *   get:
 *     summary: Obtiene todas las películas de un actor
 *     tags:
 *      - Actor_Contenidos
 *     parameters:
 *       - in: path
 *         name: actorId
 *         required: true
 *         description: ID del actor
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de películas del actor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   contenido_id:
 *                     type: integer
 *                   titulo:
 *                     type: string
 *                   resumen:
 *                     type: string
 *       400:
 *         description: Solicitud incorrecta
 *       500:
 *         description: Error en el servidor
 */
router.get('/actor/:actorId/contenidos', actorContenidoController.listarPeliculasPorActor);

/**
 * @swagger
 * /contenido/{contenidoId}/actores:
 *   get:
 *     summary: Obtiene todos los actores de una película
 *     tags:
 *      - Actor_Contenidos
 *     parameters:
 *       - in: path
 *         name: contenidoId
 *         required: true
 *         description: ID del contenido
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de actores de la película
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   actor_id:
 *                     type: integer
 *                   nombre:
 *                     type: string
 *       400:
 *         description: Solicitud incorrecta
 *       500:
 *         description: Error en el servidor
 */
router.get('/contenido/:contenidoId/actores', actorContenidoController.listarActoresPorPelicula);

/**
 * @swagger
 * /actor_contenido:
 *   post:
 *     summary: Crea una relación entre un actor y un contenido
 *     tags:
 *      - Actor_Contenidos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               actorId:
 *                 type: integer
 *               contenidoId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Relación creada exitosamente
 *       400:
 *         description: Solicitud incorrecta
 *       500:
 *         description: Error en el servidor
 */
router.post('/', actorContenidoController.crearRelacionActorContenido);

module.exports = router;
