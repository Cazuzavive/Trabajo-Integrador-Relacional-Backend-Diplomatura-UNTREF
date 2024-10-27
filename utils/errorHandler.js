module.exports = (res, error) => {
    console.error(error);  // Para logging en desarrollo
    if (error.isJoi) {
        // Si el error proviene de Joi (errores de validación), responde con 400
        return res.status(400).json({ error: error.details[0].message });
    }
    res.status(500).json({ error: 'Error en el servidor' });
};
