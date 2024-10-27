const actorService = require('../services/actorService');


const agregarActores = async (req, res) => {
    const actores = req.body; // Espera un arreglo de actores
    if (!Array.isArray(actores) || actores.some(actor => !actor.nombre || !actor.apellido)) {
        return res.status(400).json({ error: 'Cada actor debe tener un nombre y apellido' });
    }
    try {
        const nuevosActores = await Promise.all(actores.map(actor => actorService.agregarActor(actor.nombre, actor.apellido)));
        res.status(201).json(nuevosActores);
    } catch (error) {
        console.error('Error al agregar actores:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

const agregarActor = async (req, res) => {
    console.log('Datos recibidos:', req.body);
    const { nombre, apellido } = req.body;

    if (!nombre || !apellido) {
        return res.status(400).json({ error: 'Nombre y apellido son requeridos' });
    }

    try {
        const nuevoActor = await actorService.agregarActor(nombre, apellido);
        res.status(201).json(nuevoActor);
        console.log(req.body);

    } catch (error) {
        console.error('Error al agregar el actor:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

const listarActores = async (req, res) => {
    console.log('Datos recibidos:', req.body);
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
    const { nombre, apellido } = req.body;

    try {
        const actorActualizado = await actorService.modificarActor(id, nombre, apellido);
        if (!actorActualizado) {
            return res.status(404).json({ error: 'Actor no encontrado' });
        }
        return res.status(200).json(actorActualizado);
    } catch (error) {
        console.error('Error al modificar el actor:', error);
        return res.status(500).json({ error: 'Error al modificar el actor', description: error.message });
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
    agregarActores,
    agregarActor,
    listarActores,
    getActorById,
    modificarActor,
    borrarActor
};

