const GeneroContenido = require('../models/genero_contenido');
const Genero = require('../models/genero');
const Contenido = require('../models/contenido');

const addGeneroContenido = async (generoId, contenidoId) => {
    try {
        return await GeneroContenido.create({ genero_id: generoId, contenido_id: contenidoId });
    } catch (error) {
        throw new Error(`Error al agregar relación género-contenido: ${error.message}`);
    }
};

const getGenerosByContenido = async (contenidoId) => {
    try {
        const contenido = await Contenido.findByPk(contenidoId, { include: Genero });
        return contenido ? contenido.Generos : null;
    } catch (error) {
        throw new Error(`Error al obtener géneros para el contenido ${contenidoId}: ${error.message}`);
    }
};

const getContenidosByGenero = async (generoId) => {
    try {
        const genero = await Genero.findByPk(generoId, { include: Contenido });
        return genero ? genero.Contenidos : null;
    } catch (error) {
        throw new Error(`Error al obtener contenidos para el género ${generoId}: ${error.message}`);
    }
};

const removeGeneroContenido = async (generoId, contenidoId) => {
    try {
        return await GeneroContenido.destroy({ where: { genero_id: generoId, contenido_id: contenidoId } });
    } catch (error) {
        throw new Error(`Error al eliminar relación género-contenido: ${error.message}`);
    }
};

module.exports = {
    addGeneroContenido,
    getGenerosByContenido,
    getContenidosByGenero,
    removeGeneroContenido,
};
