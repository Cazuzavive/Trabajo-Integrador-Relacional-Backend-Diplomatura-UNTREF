const ActorContenido = require('../models/actor_contenido');

class ActorContenidoService {
    async getPeliculasPorActor(actorId) {
        return await ActorContenido.findAll({
            where: { actor_id: actorId },
            include: ['Contenido']
        });
    }

    async getActoresPorPelicula(contenidoId) {
        return await ActorContenido.findAll({
            where: { contenido_id: contenidoId },
            include: ['Actor']
        });
    }

    // Método para agregar una relación entre actor y contenido
    async crearRelacionActorContenido(actorId, contenidoId) {
        try {
            // Verifica que ambos IDs sean válidos y existentes
            const nuevaRelacion = await ActorContenido.create({
                actor_id: actorId,
                contenido_id: contenidoId
            });
            return nuevaRelacion;
        } catch (error) {
            throw new Error('Error al crear la relación entre actor y contenido: ' + error.message);
        }
    }
}

module.exports = new ActorContenidoService();
