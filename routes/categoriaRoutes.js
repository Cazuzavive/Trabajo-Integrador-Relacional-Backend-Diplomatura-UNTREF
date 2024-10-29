const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoriaController");

/**
 * @swagger
 * /listar-categorias:
 *   get:
 *     summary: Lista todas las categorías
 *     tags:
 *       - Categorías
 *     responses:
 *       200:
 *         description: Lista de categorías
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Categoria'
 *       500:
 *         description: Error interno del servidor
 */
router.get("/listar-categorias", categoriaController.getAllCategorias);

/**
 * @swagger
 * /categoria/{id}:
 *   get:
 *     summary: Obtiene una categoría por ID
 *     tags:
 *       - Categorías
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID único de la categoría
 *     responses:
 *       200:
 *         description: Categoría encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categoria'
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Categoría no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.get("/categoria/:id", categoriaController.getCategoriaById);

/**
 * @swagger
 * /agregar-categoria:
 *   post:
 *     summary: Agrega una nueva categoría
 *     tags:
 *       - Categorías
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Categoria'
 *     responses:
 *       201:
 *         description: Categoría creada exitosamente
 *       400:
 *         description: Error en los datos enviados
 *       500:
 *         description: Error interno del servidor
 */
router.post("/agregar-categoria", categoriaController.createCategoria);

/**
 * @swagger
 * /modificar-categoria/{id}:
 *   put:
 *     summary: Actualiza una categoría por ID
 *     tags:
 *       - Categorías
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID único de la categoría
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Categoria'
 *     responses:
 *       200:
 *         description: Categoría actualizada exitosamente
 *       400:
 *         description: Error en los datos enviados o ID inválido
 *       404:
 *         description: Categoría no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.put("/modificar-categoria/:id", categoriaController.updateCategoria);

/**
 * @swagger
 * /borrar-categoria/{id}:
 *   delete:
 *     summary: Borra una categoría por ID
 *     tags:
 *       - Categorías
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID único de la categoría
 *     responses:
 *       200:
 *         description: Categoría eliminada exitosamente
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Categoría no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.delete("/borrar-categoria/:id", categoriaController.deleteCategoria);

module.exports = router;
