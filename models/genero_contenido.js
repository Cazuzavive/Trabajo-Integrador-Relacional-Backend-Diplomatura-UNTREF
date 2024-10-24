const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')
const Actor = require('./genero')
const Film = require('./contenido')
const Contenido = require('./contenido')
const Genero = require('./genero')

const GeneroContenido = sequelize.define('GeneroContenido', {
    genero_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Genero,
            key: 'genero_id'
        }
    },
    contenido_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Contenido,
            key: 'contenido_id'
        }
    }
}, {
    tableName: 'genero_contenido',
    timestamps: false
})

// Definir las relaciones
Genero.belongsToMany(Contenido, { through: GeneroContenido, foreignKey: 'genero_id' })
Contenido.belongsToMany(Genero, { through: GeneroContenido, foreignKey: 'contenido_id' })

module.exports = GeneroContenido