const { Sequelize } = require('sequelize');
const path = require('path');

const databasePath = process.env.NODE_ENV === 'test'
    ? path.join(__dirname, '..', 'database_test.sqlite')  // Banco separado para testes
    : path.join(__dirname, '..', 'database.sqlite');       // Banco principal

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: databasePath,
    logging: process.env.NODE_ENV !== 'test', // Desativa logs no modo de teste
});

module.exports = sequelize;
