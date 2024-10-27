const { DataTypes } = require('sequelize');
const { sequelize } = require('../conexion/connection');

const Actor = sequelize.define('Actor', {
    actor_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(255), // Definir longitud máxima
        allowNull: false,
        validate: {
            notEmpty: true, // No puede ser vacío
            len: [1, 255] // Longitud mínima y máxima
        }
    },
    apellido: {
        type: DataTypes.STRING(255), // Definir longitud máxima
        allowNull: false,
        validate: {
            notEmpty: true, // No puede ser vacío
            len: [1, 255] // Longitud mínima y máxima
        }
    }
}, {
    tableName: 'actor',
    timestamps: false
});

module.exports = Actor;
