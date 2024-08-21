const { DataTypes } = require('sequelize');
const sequelize = require('../data/db');

const Acesso = sequelize.define('Acesso', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cod_acesso: {
        type: DataTypes.STRING,
        allowNull: false
    },
    matricula: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'acesso',
    timestamps: false
});

module.exports = Acesso;
