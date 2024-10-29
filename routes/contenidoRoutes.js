const express = require('express');
const router = express.Router();
const contenidoController = require('../controllers/contenidoController');

// Rutas contenido

/**
 * @swagger
 * /listar-contenidos:
 *   get:
 *     summary: Obtiene todos los contenidos
 *     tags: 
 *       - Contenidos
 *     responses:
 *       200:
 *         description: Lista de todos los contenidos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contenido'
 *       500:
 *         description: Error interno del servidor
 */
router.get("/listar-contenidos", contenidoController.getAllContenidos);

/**
 * @swagger
 * /contenido/{id}:
 *   get:
 *     summary: Obtiene un contenido por ID
 *     tags:
 *       - Contenidos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del contenido
 *     responses:
 *       200:
 *         description: Contenido obtenido por ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contenido'
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Contenido no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get("/contenido/:id", contenidoController.getContenidoById);

/**
 * @swagger
 * /agregar-contenido:
 *   post:
 *     summary: Agrega un nuevo contenido
 *     tags:
 *       - Contenidos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contenido'
 *     responses:
 *       201:
 *         description: Contenido creado exitosamente
 *       400:
 *         description: Error en los datos enviados
 *       500:
 *         description: Error interno del servidor
 */
router.post("/agregar-contenido", contenidoController.createContenido);

/**
 * @swagger
 * /agregar-contenidos:
 *   post:
 *     summary: Agrega múltiples contenidos
 *     tags:
 *       - Contenidos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Contenido'
 *     responses:
 *       201:
 *         description: Contenidos creados exitosamente
 *       400:
 *         description: Error en los datos enviados
 *       500:
 *         description: Error interno del servidor
 */
router.post('/agregar-contenidos', contenidoController.crearContenidos);

/**
 * @swagger
 * /modificar-contenido/{id}:
 *   put:
 *     summary: Modifica o actualiza un contenido por ID
 *     tags:
 *       - Contenidos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del contenido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contenido'
 *     responses:
 *       200:
 *         description: Contenido actualizado exitosamente
 *       400:
 *         description: ID inválido o error en los datos enviados
 *       404:
 *         description: Contenido no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put("/modificar-contenido/:id", contenidoController.updateContenido);

/**
 * @swagger
 * /borrar-contenido/{id}:
 *   delete:
 *     summary: Borra un contenido por ID
 *     tags:
 *       - Contenidos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del contenido
 *     responses:
 *       200:
 *         description: Contenido borrado exitosamente
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Contenido no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete("/borrar-contenido/:id", contenidoController.deleteContenido);

module.exports = router;
