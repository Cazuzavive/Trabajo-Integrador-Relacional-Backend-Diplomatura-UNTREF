const { Sequelize, DataTypes } = require('sequelize')
process.loadEnvFile()

const { DBUSER, PASSWORD, HOST, DATABASE } = process.env

const sequelize = new Sequelize(DATABASE, DBUSER, PASSWORD, {
    host: HOST,
    dialect: 'mysql',
})

const conectarBD = async () => {
    try {
        await sequelize.authenticate()
        console.log('Conexión establecida con exito ! =)')
        sequelize.close()
    } catch (error) {
        console.error('No me pude conectar porque sucedió:', error)
    }
}

conectarBD()


