const express = require("express");
const router = express.Router();
const genController = require("../controllers/genController");

/**
 * @swagger
 * /listar-gen:
 *   get:
 *     summary: Lista todos los géneros generales
 *     tags:
 *       - Generales
 *     responses:
 *       200:
 *         description: Lista de géneros generales
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Gen'
 *       500:
 *         description: Error interno del servidor
 */
router.get("/listar-gen", genController.getAllGen);

/**
 * @swagger
 * /gen/{id}:
 *   get:
 *     summary: Obtiene un género general por ID
 *     tags:
 *       - Generales
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID único del género general
 *     responses:
 *       200:
 *         description: Género general encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Gen'
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Género general no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get("/gen/:id", genController.getGenById);

/**
 * @swagger
 * /agregar-gen:
 *   post:
 *     summary: Agrega un nuevo género general
 *     tags:
 *       - Generales
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Gen'
 *     responses:
 *       201:
 *         description: Género general creado exitosamente
 *       400:
 *         description: Error en los datos enviados
 *       500:
 *         description: Error interno del servidor
 */
router.post("/agregar-gen", genController.createGen);

/**
 * @swagger
 * /modificar-gen/{id}:
 *   put:
 *     summary: Actualiza un género general por ID
 *     tags:
 *       - Generales
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID único del género general
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Gen'
 *     responses:
 *       200:
 *         description: Género general actualizado exitosamente
 *       400:
 *         description: Error en los datos enviados o ID inválido
 *       404:
 *         description: Género general no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put("/modificar-gen/:id", genController.updateGen);

/**
 * @swagger
 * /borrar-gen/{id}:
 *   delete:
 *     summary: Borra un género general por ID
 *     tags:
 *       - Generales
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID único del género general
 *     responses:
 *       200:
 *         description: Género general eliminado exitosamente
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Género general no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete("/borrar-gen/:id", genController.deleteGen);

module.exports = router;
