const genService = require("../services/genService");

const getAllGen = async (req, res) => {
    try {
        const gen = await genService.getAllGen();
        res.status(200).json(gen);
    } catch (error) {
        console.error('Error al buscar los Generales:', error);
        res.status(500).json({ error: "Ocurrió un error al buscar los Generales" });
    }
};

const getGenById = async (req, res) => {
    try {
        const gen = await genService.getGenById(req.params.id);
        if (gen) {
            res.status(200).json(gen);
        } else {
            res.status(404).json({ message: "General no encontrado" });
        }
    } catch (error) {
        console.error('Error al buscar el General por ID:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

const createGen = async (req, res) => {
    const { gen } = req.body;

    if (!gen) {
        return res.status(400).json({ error: 'El campo "gen" es requerido.' });
    }

    try {
        const newGen = await genService.createGen({ gen });
        res.status(201).json(newGen);
    } catch (error) {
        console.error('Error al crear el General:', error);
        res.status(500).json({ error: "No se puede crear el General" });
    }
};

const updateGen = async (req, res) => {
    try {
        const updatedGen = await genService.updateGen(req.params.id, req.body);
        if (updatedGen) {
            res.status(200).json(updatedGen);
        } else {
            res.status(404).json({ message: "General no encontrado" });
        }
    } catch (error) {
        console.error('Error al actualizar el General:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

const deleteGen = async (req, res) => {
    try {
        const isDeleted = await genService.deleteGen(req.params.id);
        if (isDeleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: "General no encontrado" });
        }
    } catch (error) {
        console.error('Error al borrar el General:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

module.exports = {
    getAllGen,
    getGenById,
    createGen,
    updateGen,
    deleteGen
};
