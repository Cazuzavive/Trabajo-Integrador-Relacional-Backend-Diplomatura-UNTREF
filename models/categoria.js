const { DataTypes } = require('sequelize')
const { sequelize } = require('../conexion/connection')

const Categoria = sequelize.define('Categoria', {
    categoria_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    tableName: 'categoria',
    timestamps: false
})

module.exports = Categoria