const { DataTypes } = require('sequelize');
const { sequelize } = require('../conexion/connection');

const Poster = sequelize.define('Poster', {
    poster_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    image: {
        type: DataTypes.STRING(255), // Definir longitud máxima
        allowNull: false,
        validate: {
            notEmpty: true, // No puede ser vacío
            isUrl: true // Validar que sea una URL
        }
    },
    contenido_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'contenido',
            key: 'contenido_id'
        },
        allowNull: false // Puede que quieras que este campo no sea nulo
    }
}, {
    tableName: 'poster',
    timestamps: false
});

module.exports = Poster;
