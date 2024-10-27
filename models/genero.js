const { DataTypes } = require('sequelize');
const { sequelize } = require('../conexion/connection');

const Genero = sequelize.define('Genero', {
    genero_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    genero: {
        type: DataTypes.STRING(255), // Definir longitud máxima
        allowNull: false,
        validate: {
            notEmpty: true, // No puede ser vacío
            len: [1, 255] // Longitud mínima y máxima
        }
    }
}, {
    tableName: 'genero',
    timestamps: false
});

module.exports = Genero;
