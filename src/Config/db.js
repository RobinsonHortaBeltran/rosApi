const { Sequelize } = require('sequelize');

// Crear la instancia de Sequelize con los datos de conexión a MySQL
const sequelize = new Sequelize('stxmhugi_ROS', 'stxmhugi_stxmhugi', 'nRYm87U59i7uA', {
    host: 'bh8948.banahosting.com',
    dialect: 'mysql',
    port: 3306,
    logging: console.log
});

// Autenticar la conexión
sequelize.authenticate()
    .then(() => {
        console.log('Database is connected');
    })
    .catch((err) => {
        console.error('Error connecting to the database:', err);
    });

module.exports = sequelize;