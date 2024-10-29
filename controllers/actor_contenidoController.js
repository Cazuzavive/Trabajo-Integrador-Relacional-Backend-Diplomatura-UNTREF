const actorContenidoService = require('../services/actor_contenidoService');

class ActorContenidoController {
    // Obtener todas las películas de un actor
    async listarPeliculasPorActor(req, res) {
        const { actorId } = req.params;

        // Validación de actorId
        if (!actorId) {
            return res.status(400).json({ error: 'El actorId es requerido.' });
        }

        try {
            const peliculas = await actorContenidoService.getPeliculasPorActor(actorId);
            return res.status(200).json(peliculas);
        } catch (error) {
            console.error('Error al obtener las películas del actor:', error);
            return res.status(500).json({ error: 'Error interno del servidor.' });
        }
    }

    // Obtener todos los actores de una película
    async listarActoresPorPelicula(req, res) {
        const { contenidoId } = req.params;

        // Validación de contenidoId
        if (!contenidoId) {
            return res.status(400).json({ error: 'El contenidoId es requerido.' });
        }

        try {
            const actores = await actorContenidoService.getActoresPorPelicula(contenidoId);
            return res.status(200).json(actores);
        } catch (error) {
            console.error('Error al obtener los actores de la película:', error);
            return res.status(500).json({ error: 'Error interno del servidor.' });
        }
    }

    // Crear una relación entre un actor y un contenido
    async crearRelacionActorContenido(req, res) {
        const { actorId, contenidoId } = req.body;

        // Validación 
        if (!actorId || !contenidoId) {
            return res.status(400).json({ error: 'actorId y contenidoId son requeridos.' });
        }

        try {
            const nuevaRelacion = await actorContenidoService.crearRelacionActorContenido(actorId, contenidoId);
            return res.status(201).json({
                message: 'Relación entre actor y contenido creada con éxito.',
                data: nuevaRelacion
            });
        } catch (error) {
            console.error('Error al crear la relación entre actor y contenido:', error);
            return res.status(500).json({ error: 'Error interno del servidor.' });
        }
    }
}

module.exports = new ActorContenidoController();
