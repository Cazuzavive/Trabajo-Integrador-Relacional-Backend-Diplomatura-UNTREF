const { DataTypes } = require('sequelize')
const sequelize = require('../conexion/database')
const Categoria = require('./categoria')
const Gen = require('./gen')

const Contenido = sequelize.define('Contenido', {
    contenido_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    resumen: {
        type: DataTypes.TEXT
    },
    busqueda: {
        type: DataTypes.VARCHAR(250),
    },
    trailer: {
        type: DataTypes.VARCHAR(250),
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'categoria',
            key: 'categoria_id'
        }
    },
    duracion: {
        type: DataTypes.INTEGER,
    },
    temporadas: {
        type: DataTypes.INTEGER,
    },
    gen_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'gen',
            key: 'gen_id'
        }
    }
}, {
    tableName: 'contenido',
    timestamps: false
})

//Definir relaciones
Contenido.HasOne(Categoria)

Contenido.HasOne(Gen)


module.exports = Contenido
