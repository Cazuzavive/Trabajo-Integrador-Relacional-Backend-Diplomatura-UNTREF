const express = require('express');
const app = express();
const contenidoRoutes = require('./routes/contenidoRoutes');
const db = require('./conexion/database');
require('dotenv').config();
console.log(process.env.PRUEBA);

// Middlewares
app.use(express.json());
app.use(async (req, res, next) => {
  try {
    await db.authenticate();
    console.log('Conexión establecida con éxito!');
    next();
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor', description: error.message })
  }
})
// Routes for CRUD
app.use('/contenido', contenidoRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
