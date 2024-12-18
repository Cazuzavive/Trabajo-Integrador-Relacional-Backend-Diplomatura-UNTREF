const { DataTypes } = require('sequelize');
const { sequelize } = require('../conexion/connection');
const Actor = require('./actor')
const Contenido = require('./contenido')

const ActorContenido = sequelize.define('ActorContenido', {
    actor_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Actor,
            key: 'actor_id'
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
    tableName: 'actor_contenido',
    timestamps: false
})

// Definir las relaciones
Actor.belongsToMany(Contenido, { through: ActorContenido, foreignKey: 'actor_id' })
Contenido.belongsToMany(Actor, { through: ActorContenido, foreignKey: 'contenido_id' })

module.exports = ActorContenido;