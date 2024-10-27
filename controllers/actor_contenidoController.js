const actorContenidoService = require('../services/actor_contenidoService');

class ActorContenidoController {
    async listarPeliculasPorActor(req, res) {
        const actorId = req.params.actorId;
        try {
            const peliculas = await actorContenidoService.getPeliculasPorActor(actorId);
            res.json(peliculas);
        } catch (error) {
            console.error('Error al listar películas por actor:', error);
            res.status(500).json({ error: 'Error al listar películas por actor' });
        }
    }

    async listarActoresPorPelicula(req, res) {
        const contenidoId = req.params.contenidoId;
        try {
            const actores = await actorContenidoService.getActoresPorPelicula(contenidoId);
            res.json(actores);
        } catch (error) {
            console.error('Error al listar actores por película:', error);
            res.status(500).json({ error: 'Error al listar actores por película' });
        }
    }
}

module.exports = new ActorContenidoController();
