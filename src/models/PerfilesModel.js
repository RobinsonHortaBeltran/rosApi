'use strict';

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/db'); // Asegúrate de que esta sea la ruta correcta a tu archivo de conexión

class Perfil extends Model { }

Perfil.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize, // La instancia de Sequelize
    modelName: 'Perfil', // Nombre del modelo
    tableName: 'perfiles', // Nombre de la tabla en la base de datos
    timestamps: true // Ya que tienes createdAt y updatedAt
});

module.exports = Perfil;
