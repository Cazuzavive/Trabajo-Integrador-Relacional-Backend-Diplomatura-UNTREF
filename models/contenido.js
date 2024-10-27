const { DataTypes } = require('sequelize');
const { sequelize } = require('../conexion/connection');
const Categoria = require('./categoria');
const Gen = require('./gen');
const Poster = require('./poster')

const Contenido = sequelize.define('Contenido', {
    contenido_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    resumen: {
        type: DataTypes.TEXT
    },
    busqueda: {
        type: DataTypes.STRING(250),
    },
    trailer: {
        type: DataTypes.STRING(250),
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
        allowNull: true
    },
    temporadas: {
        type: DataTypes.INTEGER,
        allowNull: true
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
});

// Relaciones
Contenido.belongsTo(Categoria);
Contenido.belongsTo(Gen);


module.exports = Contenido;
