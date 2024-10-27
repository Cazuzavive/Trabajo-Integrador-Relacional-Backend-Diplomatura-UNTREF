const ActorContenido = require('../models/actor_contenido');

class ActorContenidoService {
    async getPeliculasPorActor(actorId) {
        return await ActorContenido.findAll({
            where: { actor_id: actorId },
            include: ['Contenido'] // Asegúrate de que la relación esté bien definida
        });
    }

    async getActoresPorPelicula(contenidoId) {
        return await ActorContenido.findAll({
            where: { contenido_id: contenidoId },
            include: ['Actor'] // Asegúrate de que la relación esté bien definida
        });
    }
}

module.exports = new ActorContenidoService();
