const { Sequelize } = require('sequelize');
require('dotenv').config();

const { DBUSER, PASSWORD, HOST, DATABASE } = process.env;

const sequelize = new Sequelize(DATABASE, DBUSER, PASSWORD, {
    host: HOST,
    dialect: 'mysql',
});

module.exports = { sequelize };