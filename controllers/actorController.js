const actorService = require('../services/actorService');

const agregarActor = async (req, res) => {
    const { nombre, apellido } = req.body;

    if (!nombre || !apellido) {
        return res.status(400).json({ error: 'Nombre y apellido son requeridos' });
    }

    try {
        const nuevoActor = await actorService.agregarActor(nombre, apellido);
        res.status(201).json(nuevoActor);
    } catch (error) {
        console.error('Error al agregar el actor:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

const listarActores = async (req, res) => {
    try {
        const actores = await actorService.listarActores();
        res.status(200).json(actores);
    } catch (error) {
        console.error('Error al listar actores:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

const getActorById = async (req, res) => {
    try {
        const actor = await actorService.getActorById(req.params.id);
        if (actor) {
            res.status(200).json(actor);
        } else {
            res.status(404).json({ message: "Actor no encontrado" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const modificarActor = async (req, res) => {
    const { id } = req.params; // Obtener el ID del actor a actualizar
    const data = req.body;

    try {
        const updatedActor = await actorService.modificarActor(id, data);
        if (updatedActor) {
            res.status(200).json(updatedActor);
        } else {
            res.status(404).json({ message: "Actor no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error en el servidor", description: error.message });
    }
};

const borrarActor = async (req, res) => {
    const { id } = req.params;

    try {
        const resultado = await actorService.borrarActor(id);
        if (!resultado) {
            return res.status(404).json({ error: 'Actor no encontrado' });
        }
        return res.status(204).send(); // No content
    } catch (error) {
        console.error('Error al borrar el actor:', error);
        return res.status(500).json({ error: 'Error al borrar el actor', description: error.message });
    }
};

module.exports = {
    agregarActor,
    listarActores,
    getActorById,
    modificarActor,
    borrarActor
};
