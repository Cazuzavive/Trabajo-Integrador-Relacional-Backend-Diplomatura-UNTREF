const { DataTypes } = require('sequelize');
const { sequelize } = require('../conexion/connection');
const Contenido = require('./contenido')

const Poster = sequelize.define('Poster', {
    poster_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contenido_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Contenido',
            key: 'contenido_id'
        }
    }


}, {
    tableName: 'poster',
    timestamps: false
})
//Definir relaciones
Poster.hasOne(Contenido)

module.exports = Poster