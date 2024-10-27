const { DataTypes } = require('sequelize');
const { sequelize } = require('../conexion/connection');

const Gen = sequelize.define('Gen', {
    gen_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    gen: {
        type: DataTypes.STRING(255), // Definir longitud máxima
        allowNull: false,
        validate: {
            notEmpty: true, // No puede ser vacío
            len: [1, 255] // Longitud mínima y máxima
        }
    }
}, {
    tableName: 'gen',
    timestamps: false
});

module.exports = Gen;
