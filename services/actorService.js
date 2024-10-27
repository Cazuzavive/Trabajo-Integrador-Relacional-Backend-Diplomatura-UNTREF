const Actor = require('../models/actor');

const actorService = {
    agregarActor: async (nombre, apellido) => {
        return await Actor.create({ nombre, apellido });
    },

    listarActores: async () => {
        return await Actor.findAll();
    },
    getActorById: async (id) => {
        return await Actor.findByPk(id);
    },

    modificarActor: async (id, data) => {
        const actor = await Actor.findByPk(id);
        if (actor) {
            return await actor.update(data);
        }
        return null;
    },

    borrarActor: async (id) => {
        const actor = await Actor.findByPk(id);
        if (actor) {
            await actor.destroy();
            return true;
        }
        return false;
    }
};

module.exports = actorService;
