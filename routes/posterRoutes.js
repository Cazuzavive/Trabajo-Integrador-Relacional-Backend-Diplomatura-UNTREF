const express = require("express");
const router = express.Router();
const posterController = require("../controllers/posterController");

/**
 * @swagger
 * /listar-poster:
 *   get:
 *     summary: Lista todos los posters
 *     tags:
 *       - Posters
 *     responses:
 *       200:
 *         description: Lista de posters
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Poster'
 *       500:
 *         description: Error interno del servidor
 */
router.get("/listar-poster", posterController.getAllPosters);

/**
 * @swagger
 * /poster/{id}:
 *   get:
 *     summary: Obtiene un poster por ID
 *     tags:
 *       - Posters
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID único del poster
 *     responses:
 *       200:
 *         description: Poster encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Poster'
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Poster no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get("/poster/:id", posterController.getPosterById);

/**
 * @swagger
 * /agregar-poster:
 *   post:
 *     summary: Agrega un nuevo poster
 *     tags:
 *       - Posters
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Poster'
 *     responses:
 *       201:
 *         description: Poster creado exitosamente
 *       400:
 *         description: Error en los datos enviados
 *       500:
 *         description: Error interno del servidor
 */
router.post("/agregar-poster", posterController.createPoster);

/**
 * @swagger
 * /modificar-poster/{id}:
 *   put:
 *     summary: Actualiza un poster por ID
 *     tags:
 *       - Posters
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID único del poster
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Poster'
 *     responses:
 *       200:
 *         description: Poster actualizado exitosamente
 *       400:
 *         description: Error en los datos enviados o ID inválido
 *       404:
 *         description: Poster no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put("/modificar-poster/:id", posterController.updatePoster);

/**
 * @swagger
 * /borrar-poster/{id}:
 *   delete:
 *     summary: Borra un poster por ID
 *     tags:
 *       - Posters
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID único del poster
 *     responses:
 *       200:
 *         description: Poster eliminado exitosamente
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Poster no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete("/borrar-poster/:id", posterController.deletePoster);

module.exports = router;

