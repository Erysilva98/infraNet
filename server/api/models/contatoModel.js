const { DataTypes } = require('sequelize');
const sequelize = require('../data/db');

const Contato = sequelize.define('Contato', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ramal: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'contato',
    timestamps: false
});

module.exports = Contato;
