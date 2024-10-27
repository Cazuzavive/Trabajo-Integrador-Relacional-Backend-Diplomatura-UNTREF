const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const actorRoutes = require('./routes/actorRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');
const contenidoRoutes = require('./routes/contenidoRoutes');
const genRoutes = require('./routes/genRoutes');
const generoRoutes = require('./routes/generoRoutes')
const { sequelize } = require('./conexion/connection');
require('dotenv').config();

app.use(express.json());

// Función para verificar la base de datos
const checkDatabase = async () => {
  try {
    const [results] = await sequelize.query('SELECT DATABASE() AS current_database;');
    console.log(`Conectado a la base de datos: ${results[0].current_database}`);
  } catch (error) {
    console.error('Error al obtener la base de datos:', error);
  }
};

// Prueba de conexión a la base de datos
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida con éxito!');
    await checkDatabase(); // Llamar a la función aquí
  } catch (error) {
    console.error('No me pude conectar porque sucedió:', error);
  }
};

// Ejecutar la prueba de conexión
testConnection();

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

// Middleware para registrar solicitudes a la ruta /actor
app.use('/actor', (req, res, next) => {
  console.log(`Received ${req.method} request to ${req.url}`);
  next();
});

// Rutas del CRUD //
//Rutas actor
app.use('/actor', actorRoutes);

//Rutas categoria
app.use('/categoria', categoriaRoutes);

//Rutas gen
app.use('/gen', genRoutes);

//Rutas contenido
app.use('/contenido', contenidoRoutes);

//Rutas genero
app.use('/genero', generoRoutes);

//Rutas genero_contenido

//Rutas actor_contenido

//Rutas poster

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
