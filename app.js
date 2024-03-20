//El proyecto es en base a una página de servicios de agrimensura. Las rutas creadas son para que tanto el usuario como el 
//administrador puedan interactuar con un formulario de consultas sobre los servios ofrecidos.
//Se incluye una ruta para poder acceder a una api externa que ofrece datos topográficos.

const server= require('./src/server/server');
require('dotenv').config();
require('./src/database/config');

const PORT= process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto: ${PORT}`);
});