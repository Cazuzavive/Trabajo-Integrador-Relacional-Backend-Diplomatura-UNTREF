// routes/generoContenidoRoutes.js

const express = require('express');
const router = express.Router();
const generoContenidoController = require('../controllers/genero_contenidoController');

/**
 * @swagger
 * /api/genero-contenido/agregar:
 *   post:
 *     summary: Crea una relación entre género y contenido
 *     tags: 
 *       - Genero_Contenido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               generoId:
 *                 type: integer
 *                 example: 1
 *               contenidoId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Relación creada exitosamente
 *       400:
 *         description: Datos de entrada incorrectos
 *       500:
 *         description: Error en el servidor
 */
router.post('/agregar', generoContenidoController.addGeneroContenido);

/**
 * @swagger
 * /api/genero-contenido/contenido/{contenidoId}/generos:
 *   get:
 *     summary: Obtiene todos los géneros de un contenido específico
 *     tags: 
 *       - Genero_Contenido
 *     parameters:
 *       - in: path
 *         name: contenidoId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del contenido
 *     responses:
 *       200:
 *         description: Lista de géneros asociados al contenido
 *       400:
 *         description: ID de contenido no válido
 *       500:
 *         description: Error en el servidor
 */
router.get('/contenido/:contenidoId/generos', generoContenidoController.getGenerosByContenido);

/**
 * @swagger
 * /api/genero-contenido/genero/{generoId}/contenidos:
 *   get:
 *     summary: Obtiene todos los contenidos de un género específico
 *     tags: 
 *       - Genero_Contenido
 *     parameters:
 *       - in: path
 *         name: generoId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del género
 *     responses:
 *       200:
 *         description: Lista de contenidos asociados al género
 *       400:
 *         description: ID de género no válido
 *       500:
 *         description: Error en el servidor
 */
router.get('/genero/:generoId/contenidos', generoContenidoController.getContenidosByGenero);

/**
 * @swagger
 * /api/genero-contenido/eliminar:
 *   delete:
 *     summary: Elimina una relación entre género y contenido
 *     tags: 
 *       - Genero_Contenido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               generoId:
 *                 type: integer
 *                 example: 1
 *               contenidoId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Relación eliminada exitosamente
 *       400:
 *         description: Datos de entrada incorrectos
 *       500:
 *         description: Error en el servidor
 */
router.delete('/eliminar', generoContenidoController.removeGeneroContenido);

module.exports = router;
