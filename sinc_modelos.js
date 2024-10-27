const express = require('express');
const app = express();
const { sequelize } = require('./conexion/connection');
require('dotenv').config();

//Importar los modelos
require('./models/actor');
require('./models/categoria');
require('./models/gen');
require('./models/contenido');
require('./models/genero');
require('./models/genero_contenido');
require('./models/actor_contenido');
require('./models/poster');

// Prueba de conexión a la base de datos
console.log(process.env.PRUEBA);

// Middlewares
app.use(async (req, res, next) => {
    try {
        await sequelize.authenticate();
        console.log('Conexión establecida con éxito!');
        next();
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor', description: error.message });
    }
});

// Middleware para interpretar JSON
app.use(express.json());

// Sincronización de los modelos con la base de datos
sequelize.sync()
    .then(() => {
        console.log('Modelos sincronizados con la base de datos');
    })
    .catch(error => {
        console.error('Error al sincronizar la base de datos:', error);
    });

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
