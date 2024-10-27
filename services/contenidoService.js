const Contenido = require('../models/contenido');

const getAllContenidos = async () => {
    return await Contenido.findAll()
};

const getContenidoById = async (id) => {
    return await Contenido.findByPk(id);
};

const createContenido = async (data) => {
    return await Contenido.create(data);
};



const updateContenido = async (id, data) => {
    const contenido = await Contenido.findByPk(id);
    if (contenido) {
        return await contenido.update(data);
    }
    return null;
};

const deleteContenido = async (id) => {
    const contenido = await Contenido.findByPk(id);
    if (contenido) {
        await contenido.destroy();
        return true;
    }
    return false;
};

module.exports = {
    getAllContenidos,
    getContenidoById,
    createContenido,

    updateContenido,
    deleteContenido
}