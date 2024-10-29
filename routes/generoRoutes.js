const express = require("express");
const router = express.Router();
const generoController = require("../controllers/generoController");

/**
 * @swagger
 * /listar-generos:
 *   get:
 *     summary: Lista todos los géneros
 *     tags:
 *       - Géneros
 *     responses:
 *       200:
 *         description: Lista de géneros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Genero'
 *       500:
 *         description: Error interno del servidor
 */
router.get("/listar-generos", generoController.getAllGeneros);

/**
 * @swagger
 * /genero/{id}:
 *   get:
 *     summary: Obtiene un género por ID
 *     tags:
 *       - Géneros
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID único del género
 *     responses:
 *       200:
 *         description: Género encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Genero'
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Género no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get("/genero/:id", generoController.getGeneroById);

/**
 * @swagger
 * /agregar-genero:
 *   post:
 *     summary: Agrega un nuevo género
 *     tags:
 *       - Géneros
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Genero'
 *     responses:
 *       201:
 *         description: Género creado exitosamente
 *       400:
 *         description: Error en los datos enviados
 *       500:
 *         description: Error interno del servidor
 */
router.post("/agregar-genero", generoController.createGenero);

/**
 * @swagger
 * /modificar-genero/{id}:
 *   put:
 *     summary: Actualiza un género por ID
 *     tags:
 *       - Géneros
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID único del género
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Genero'
 *     responses:
 *       200:
 *         description: Género actualizado exitosamente
 *       400:
 *         description: Error en los datos enviados o ID inválido
 *       404:
 *         description: Género no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put("/modificar-genero/:id", generoController.updateGenero);

/**
 * @swagger
 * /borrar-genero/{id}:
 *   delete:
 *     summary: Borra un género por ID
 *     tags:
 *       - Géneros
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID único del género
 *     responses:
 *       200:
 *         description: Género eliminado exitosamente
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Género no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete("/borrar-genero/:id", generoController.deleteGenero);

module.exports = router;
