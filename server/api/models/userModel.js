const { DataTypes } = require('sequelize');
const sequelize = require('../data/db');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_nascimento: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'user',
    timestamps: false
});

// Definindo o método getUserByUsername
User.getUserByUsername = async function(username) {
    return await User.findOne({ where: { username } });
};

module.exports = User;
