const cgenService = require("../services/genService");

const getAllGen = async (req, res) => {
    try {
        const gen = await genService.getAllGen();
        res.status(200).json(gen);
    } catch (error) {
        res.status(400).json({ error: "Ocurrio un error al buscar los Generales" });
        res.status(500).json({ error: 'Error en el servidor' });
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
        res.status(400).json({ error: 'Error en el servidor' });
    }
};

const createGen = async (req, res) => {
    try {
        const newGen = await genService.createGen(req.body);
        res.status(201).json(newGen);
    } catch (error) {
        res.status(400).json({ error: "No se puede crear el General" });
        res.status(500).json({ error: 'Error en el servidor' });
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
        res.status(400).json({ error: 'Error en el servidor' });
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
        res.status(400).json({ error: 'Error en el servidor' });
    }
};

module.exports = {
    getAllGen,
    getGenById,
    createGen,
    updateGen,
    deleteGen
};
