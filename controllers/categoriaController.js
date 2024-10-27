const categoriaService = require("../services/categoriaService");

const getAllCategorias = async (req, res) => {
    try {
        const categorias = await categoriaService.getAllCategorias();
        res.status(200).json(categorias);
    } catch (error) {
        res.status(400).json({ error: 'Las Categorias no fueron encontradas' });
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

const getCategoriaById = async (req, res) => {
    try {
        const categoria = await categoriaService.getCategoriaById(req.params.id);
        if (categoria) {
            res.status(200).json(categoria);
        } else {
            res.status(404).json({ message: "Categoria no encontrada" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createCategoria = async (req, res) => {
    try {
        const newCategoria = await categoriaService.createCategoria(req.body);
        res.status(201).json(newCategoria);
    } catch (error) {
        res.status(400).json({ error: error.message });
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

const updateCategoria = async (req, res) => {
    try {
        const updatedCategoria = await categoriaService.updateCategoria(req.params.id, req.body);
        if (updatedCategoria) {
            res.status(200).json(updatedCategoria);
        } else {
            res.status(404).json({ message: "Categoria no encontrada" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteCategoria = async (req, res) => {
    try {
        const isDeleted = await categoriaService.deleteCategoria(req.params.id);
        if (isDeleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: "Categoria no encontrada" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getAllCategorias,
    getCategoriaById,
    createCategoria,
    updateCategoria,
    deleteCategoria
};
