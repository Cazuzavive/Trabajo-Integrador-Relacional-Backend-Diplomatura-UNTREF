const { DataTypes } = require('sequelize');
const { sequelize } = require('../conexion/connection');

const Categoria = sequelize.define('Categoria', {
    categoria_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    categoria: {
        type: DataTypes.STRING(255), // Definir longitud máxima
        allowNull: false,
        validate: {
            notEmpty: true, // No puede ser vacío
            len: [1, 255] // Longitud mínima y máxima
        }
    }
}, {
    tableName: 'categoria',
    timestamps: false
});

module.exports = Categoria;
