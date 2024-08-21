const { DataTypes } = require('sequelize');
const sequelize = require('../data/db');

const Avisos = sequelize.define('Avisos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    img_data: {
        type: DataTypes.TEXT,  // Armazenando a imagem como Base64 em um campo TEXT
        allowNull: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prioridade: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    data_publicacao: {
        type: DataTypes.DATE,
        allowNull: true
    },
    link: {
        type: DataTypes.STRING,
        allowNull: true
    },
    subtitulo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'avisos',
    timestamps: false
});

module.exports = Avisos;
