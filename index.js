const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// Crear el servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// Habilitar Cors
// Para que esto funcione necesito tener la base de datos que se estan utilizando completamente vacias.
app.use(cors({ credentials: true, origin: true }));
app.options("*", cors());

// Habilitar express.js
app.use( express.json({ extended: true }) );

// Puerto de la app
const port = process.env.PORT || 4300;

// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));

// Arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`EL servidor esta funcionando en el puerto ${port}`);
});