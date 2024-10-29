const generoContenidoService = require('../services/genero_contenidoService');

const addGeneroContenido = async (req, res) => {
    const { generoId, contenidoId } = req.body;
    try {
        const relacion = await generoContenidoService.addGeneroContenido(generoId, contenidoId);
        res.status(201).json(relacion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getGenerosByContenido = async (req, res) => {
    const { contenidoId } = req.params;
    try {
        const generos = await generoContenidoService.getGenerosByContenido(contenidoId);
        res.status(200).json(generos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getContenidosByGenero = async (req, res) => {
    const { generoId } = req.params;
    try {
        const contenidos = await generoContenidoService.getContenidosByGenero(generoId);
        res.status(200).json(contenidos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const removeGeneroContenido = async (req, res) => {
    const { generoId, contenidoId } = req.body;
    try {
        await generoContenidoService.removeGeneroContenido(generoId, contenidoId);
        res.status(200).json({ message: 'Relación eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    addGeneroContenido,
    getGenerosByContenido,
    getContenidosByGenero,
    removeGeneroContenido,
};
