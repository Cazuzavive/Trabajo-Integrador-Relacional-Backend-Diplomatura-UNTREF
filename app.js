const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const actorRoutes = require('./routes/actorRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');
const contenidoRoutes = require('./routes/contenidoRoutes');
const genRoutes = require('./routes/genRoutes');
const generoRoutes = require('./routes/generoRoutes');
const posterRoutes = require('./routes/posterRoutes');
const actor_contenidoRoutes = require('./routes/actor_contenidoRoutes');
const { sequelize } = require('./conexion/connection');
require('dotenv').config();
require('./models/associations');
const { swaggerUi, swaggerDocs } = require('./swagger/swaggerConfig')

app.use(express.json());

// Swagger Config
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

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
//Actor
app.use('/actor', actorRoutes);

//Categorias
app.use('/categoria', categoriaRoutes);

//Gen
app.use('/gen', genRoutes);

//Contenidos
app.use('/contenido', contenidoRoutes);

//Genero
app.use('/genero', generoRoutes);

//genero_contenido

//actor_contenido

//Posters
app.use('/poster', posterRoutes);

//Actor_Contenido
app.use('/actor_contenido', actor_contenidoRoutes);

app.get('/', (req, res) => {
  res.send('Bienvenidos a trailer_flix_nueva !')
})

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
