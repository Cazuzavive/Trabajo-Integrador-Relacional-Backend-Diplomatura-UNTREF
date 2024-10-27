const Genero = require('../models/genero');

const getAllGeneros = async () => {
    return await Genero.findAll();
};

const getGeneroById = async (id) => {
    return await Genero.findByPk(id);
};

const createGenero = async (data) => {
    return await Genero.create(data);
};

const updateGenero = async (id, data) => {
    const genero = await Genero.findByPk(id);
    if (genero) {
        return await genero.update(data);
    }
    return null;
};

const deleteGenero = async (id) => {
    const genero = await Genero.findByPk(id);
    if (genero) {
        await genero.destroy();
        return true;
    }
    return false;
};

module.exports = {
    getAllGeneros,
    getGeneroById,
    createGenero,
    updateGenero,
    deleteGenero
};
