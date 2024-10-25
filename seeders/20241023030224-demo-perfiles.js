'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('perfiles', [
      {
        nombre: 'Administrador',
        descripcion: 'Perfil con todos los permisos',
        estado:"activo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Usuario',
        descripcion: 'Perfil con permisos limitados',
        estado: "activo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Editor',
        descripcion: 'Perfil que puede editar contenido',
        estado: "activo",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('perfiles', null, {});
  }
};
