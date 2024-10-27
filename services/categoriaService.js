const Categoria = require('../models/categoria');

const getAllCategorias = async () => {
    return await Categoria.findAll();
};

const getCategoriaById = async (id) => {
    return await Categoria.findByPk(id);
};

const createCategoria = async (data) => {
    return await Categoria.create(data);
};

const updateCategoria = async (id, data) => {
    const categoria = await Categoria.findByPk(id);
    if (categoria) {
        return await categoria.update(data);
    }
    return null;
};

const deleteCategoria = async (id) => {
    const categoria = await Categoria.findByPk(id);
    if (categoria) {
        await categoria.destroy();
        return true;
    }
    return false;
};

module.exports = {
    getAllCategorias,
    getCategoriaById,
    createCategoria,
    updateCategoria,
    deleteCategoria
};
