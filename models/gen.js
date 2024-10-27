const { DataTypes } = require('sequelize');
const { sequelize } = require('../conexion/connection');

const Gen = sequelize.define('Gen', {
    gen_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    gen: {
        type: DataTypes.STRING,
        allowNull: false
    },


}, {
    tableName: 'gen',
    timestamps: false
})


module.exports = Gen
