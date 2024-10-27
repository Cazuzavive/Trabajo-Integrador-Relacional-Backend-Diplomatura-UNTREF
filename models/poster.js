const { DataTypes } = require('sequelize');
const { sequelize } = require('../conexion/connection');


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
            model: 'contenido',
            key: 'contenido_id'
        }
    }


}, {
    tableName: 'poster',
    timestamps: false
})


module.exports = Poster;