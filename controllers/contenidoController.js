const contenidoService = require("../services/contenidoService.js");

const getAllContenidos = async (req, res) => {
    try {
        const contenido = await contenidoService.getAllContenidos();
        res.status(200).json(contenido);
    } catch (error) {
        console.error('Error al obtener contenidos:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

const getContenidoById = async (req, res) => {
    try {
        const contenido = await contenidoService.getContenidoById(req.params.id);
        if (contenido) {
            res.status(200).json(contenido);
        } else {
            res.status(404).json({ message: "Contenido no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

const createContenido = async (req, res) => {
    try {
        const newContenido = await contenidoService.createContenido(req.body);
        res.status(201).json(newContenido);
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

const crearContenidos = async (req, res) => {
    const contenidos = req.body; // Espera un arreglo de objetos de contenido

    // Validar que se reciba un arreglo y que cada objeto tenga los campos requeridos
    if (!Array.isArray(contenidos) || contenidos.some(contenido =>
        !contenido.titulo ||
        !contenido.resumen ||
        !contenido.busqueda ||
        !contenido.trailer ||
        !contenido.categoria_id ||
        !contenido.duracion ||
        !contenido.gen_id
    )) {
        return res.status(400).json({ error: 'Cada contenido debe tener todos los campos requeridos' });
    }

    try {
        const nuevosContenidos = await Promise.all(contenidos.map(contenido => contenidoService.createContenido(contenido)));
        res.status(201).json(nuevosContenidos);
    } catch (error) {
        console.error('Error al agregar contenidos:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

const updateContenido = async (req, res) => {
    try {
        const updatedContenido = await contenidoService.updateContenido(req.params.id, req.body);
        if (updatedContenido) {
            res.status(200).json(updatedContenido);
        } else {
            res.status(404).json({ message: "Contenido no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

const deleteContenido = async (req, res) => {
    try {
        const isDeleted = await contenidoService.deleteContenido(req.params.id);
        if (isDeleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: "Contenido no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

module.exports = {
    getAllContenidos,
    getContenidoById,
    createContenido,
    crearContenidos,
    updateContenido,
    deleteContenido
};
