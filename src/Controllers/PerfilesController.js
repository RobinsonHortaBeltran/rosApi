const Perfil = require('../models/PerfilesModel');

const crearPerfil = async (req, res) => {
    try {
        const { nombre, descripcion,estado } = req.body;

        const nuevoPerfil = await Perfil.create({
            nombre,
            descripcion,
            estado
        });

        res.status(201).json({
            message: 'Perfil creado exitosamente',
            data: nuevoPerfil
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al crear el perfil',
            error: error.message
        });
    }
};

// Obtener todos los perfiles
const obtenerPerfiles = async (req, res) => {
    try {
        const perfiles = await Perfil.findAll();

        res.status(200).json({
            message: 'Perfiles obtenidos exitosamente',
            data: perfiles
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener los perfiles',
            error: error.message
        });
    }
};

// Obtener un perfil por ID
const obtenerPerfilPorId = async (req, res) => {
    try {
        const { id } = req.params;

        const perfil = await Perfil.findByPk(id);

        if (!perfil) {
            return res.status(404).json({
                message: 'Perfil no encontrado'
            });
        }

        res.status(200).json({
            message: 'Perfil obtenido exitosamente',
            data: perfil
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener el perfil',
            error: error.message
        });
    }
};

// Actualizar un perfil
const actualizarPerfil = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion,estado } = req.body;

        const perfil = await Perfil.findByPk(id);

        if (!perfil) {
            return res.status(404).json({
                message: 'Perfil no encontrado'
            });
        }

        perfil.nombre = nombre;
        perfil.descripcion = descripcion;
        perfil.estado = estado;
        await perfil.save();

        res.status(200).json({
            message: 'Perfil actualizado exitosamente',
            data: perfil
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al actualizar el perfil',
            error: error.message
        });
    }
};

// Eliminar un perfil
const eliminarPerfil = async (req, res) => {
    try {
        const { id } = req.params;

        const perfil = await Perfil.findByPk(id);

        if (!perfil) {
            return res.status(404).json({
                message: 'Perfil no encontrado'
            });
        }

        await perfil.destroy();

        res.status(200).json({
            message: 'Perfil eliminado exitosamente'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar el perfil',
            error: error.message
        });
    }
};

module.exports = {
    crearPerfil,
    obtenerPerfiles,
    obtenerPerfilPorId,
    actualizarPerfil,
    eliminarPerfil
};