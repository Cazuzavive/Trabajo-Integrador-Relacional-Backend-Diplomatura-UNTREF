const { DataTypes } = require('sequelize');
const { sequelize } = require('../conexion/connection');

const Genero = sequelize.define('Genero', {
    genero_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'genero',
    timestamps: false
})

module.exports = Genero