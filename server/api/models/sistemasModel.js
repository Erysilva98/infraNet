const { DataTypes } = require('sequelize');
const sequelize = require('../data/db');

const Sistemas = sequelize.define('Sistemas', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    img_path: {
        type: DataTypes.TEXT,  // Armazenando a imagem como Base64 em um campo TEXT
        allowNull: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    link: {
        type: DataTypes.STRING,
        allowNull: true
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'sistemas',
    timestamps: false
});

module.exports = Sistemas;
