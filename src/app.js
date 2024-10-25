const express = require('express');
const app = express();
const routes = require('./Routes/Index');
const cors = require('cors');
app.use(express.json());


app.use(cors({
    origin: 'http://localhost:4200,http://localhost:8100', // Cambia esto si tu frontend está en otro puerto o dominio
    methods: ['GET', 'POST','PUT'], // Especifica los métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Añade otros headers que necesites
}));

// Routes
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
// Inicia el servidor en el puerto 3000
const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = { server };