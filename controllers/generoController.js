const generoService = require("../services/generoService");

const getAllGeneros = async (req, res) => {
    try {
        const genero = await generoService.getAllGeneros();
        res.status(200).json(genero);
    } catch (error) {
        res.status(400).json({ error: "Ocurrio un error al buscar los Generos" });
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

const getGeneroById = async (req, res) => {
    try {
        const genero = await generoService.getGeneroById(req.params.id);
        if (genero) {
            res.status(200).json(genero);
        } else {
            res.status(404).json({ message: "Genero no encontrado" });
        }
    } catch (error) {
        res.status(400).json({ error: 'Error en el servidor' });
    }
};

const createGenero = async (req, res) => {
    try {
        const newGenero = await generoService.createGenero(req.body);
        res.status(201).json(newGenero);
    } catch (error) {
        res.status(400).json({ error: "No se puede crear el Genero" });
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

const updateGenero = async (req, res) => {
    try {
        const updatedGenero = await generoService.updateGenero(req.params.id, req.body);
        if (updatedGenero) {
            res.status(200).json(updatedGenero);
        } else {
            res.status(404).json({ message: "Genero no encontrado" });
        }
    } catch (error) {
        res.status(400).json({ error: 'Error en el servidor' });
    }
};

const deleteGenero = async (req, res) => {
    try {
        const isDeleted = await generoService.deleteGenero(req.params.id);
        if (isDeleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: "Genero no encontrado" });
        }
    } catch (error) {
        res.status(400).json({ error: 'Error en el servidor' });
    }
};

module.exports = {
    getAllGeneros,
    getGeneroById,
    createGenero,
    updateGenero,
    deleteGenero
};
