const { DataTypes } = require('sequelize');
const { sequelize } = require('../conexion/connection');
const Categoria = require('./categoria');
const Gen = require('./gen');

const Contenido = sequelize.define('Contenido', {
    contenido_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true, // No puede ser vacío
            len: [1, 100] // Longitud mínima y máxima
        }
    },
    resumen: {
        type: DataTypes.TEXT,
        allowNull: true, // Permite nulo
    },
    busqueda: {
        type: DataTypes.STRING(250),
        allowNull: true,
        validate: {
            len: [0, 250] // Longitud máxima
        }
    },
    trailer: {
        type: DataTypes.STRING(250),
        allowNull: true,
        validate: {
            isUrl: true, // Verificar que sea una URL válida
            len: [0, 250] // Longitud máxima
        }
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'categoria',
            key: 'categoria_id'
        },
        allowNull: false, // Requiere un valor
        validate: {
            isInt: true // Debe ser un número entero
        }
    },
    duracion: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: true, // Debe ser un número entero
            min: 0 // No puede ser negativo
        }
    },
    temporadas: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: true, // Debe ser un número entero
            min: 0 // No puede ser negativo
        }
    },
    gen_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'gen',
            key: 'gen_id'
        },
        allowNull: false, // Requiere un valor
        validate: {
            isInt: true // Debe ser un número entero
        }
    }
}, {
    tableName: 'contenido',
    timestamps: false
});

// Relaciones
Contenido.belongsTo(Categoria, { foreignKey: 'categoria_id', as: 'categoria' });
Contenido.belongsTo(Gen, { foreignKey: 'gen_id', as: 'gen' });


module.exports = Contenido;
