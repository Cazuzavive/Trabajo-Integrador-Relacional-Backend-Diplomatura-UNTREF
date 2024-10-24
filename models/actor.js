const { DataTypes } = require('sequelize')
const sequelize = require('../conexion/database')

const Actor = sequelize.define('Actor', {
    actor_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'actor',
    timestamps: false
})

module.exports = Actor
