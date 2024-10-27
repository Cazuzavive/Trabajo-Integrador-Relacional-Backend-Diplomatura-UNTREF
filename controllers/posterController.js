const posterService = require("../services/posterService");

const getAllPosters = async (req, res) => {
    try {
        const poster = await posterService.getAllPosters();
        res.status(200).json(poster);
    } catch (error) {
        console.error('Error al buscar los posters:', error);
        res.status(500).json({ error: "Ocurrió un error al buscar los posters" });
    }
};

const getPosterById = async (req, res) => {
    try {
        const poster = await posterService.getPosterById(req.params.id);
        if (poster) {
            res.status(200).json(poster);
        } else {
            res.status(404).json({ message: "poster no encontrado" });
        }
    } catch (error) {
        console.error('Error al buscar el poster por ID:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

const createPoster = async (req, res) => {
    const { poster } = req.body;

    if (!poster) {
        return res.status(400).json({ error: 'El campo "Poster" es requerido.' });
    }

    try {
        const newPoster = await posterService.createPoster({ poster });
        res.status(201).json(newPoster);
    } catch (error) {
        console.error('Error al crear el poster:', error);
        res.status(500).json({ error: "No se puede crear el poster" });
    }
};

const updatePoster = async (req, res) => {
    try {
        const updatedPoster = await posterService.updatePoster(req.params.id, req.body);
        if (updatedPoster) {
            res.status(200).json(updatedPoster);
        } else {
            res.status(404).json({ message: "Poster no encontrado" });
        }
    } catch (error) {
        console.error('Error al actualizar el poster:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

const deletePoster = async (req, res) => {
    try {
        const isDeleted = await posterService.deletePoster(req.params.id);
        if (isDeleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: "poster no encontrado" });
        }
    } catch (error) {
        console.error('Error al borrar el poster:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

module.exports = {
    getAllPosters,
    getPosterById,
    createPoster,
    updatePoster,
    deletePoster
};
