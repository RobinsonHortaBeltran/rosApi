const express = require('express');
const router = express.Router();
const perfilController = require('../../Controllers/PerfilesController');

router.post('/', perfilController.crearPerfil);            // Crear un nuevo perfil
router.get('/', perfilController.obtenerPerfiles);         // Obtener todos los perfiles
router.get('/:id', perfilController.obtenerPerfilPorId);   // Obtener un perfil por ID
router.put('/:id', perfilController.actualizarPerfil);     // Actualizar un perfil por ID
router.delete('/:id', perfilController.eliminarPerfil);    // Eliminar un perfil por ID

module.exports = router;