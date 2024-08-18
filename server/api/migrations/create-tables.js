const sequelize = require('../data/db');
const User = require('../models/userModel');
const Contato = require('../models/contatoModel');
const Acesso = require('../models/acessoModel');

sequelize.sync({ force: true }).then(() => {
    console.log("Tabelas criadas com sucesso!");
}).catch(error => {
    console.error("Erro ao criar tabelas: ", error);
});
