const db = require('../db/database');
const { DataTypes } = require('sequelize');

const contactos=db.define('contacts', {
    nombre:{
        type:DataTypes.STRING,
    },
    correo:{
        type:DataTypes.STRING,
    },
    telefono:{
        type:DataTypes.STRING,
        unique: true,
    },
})

module.exports = contactos;