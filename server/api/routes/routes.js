const express = require('express');
const routes = express.Router();

// Rotas do Usuário
const userController = require('../controllers/userController');

routes.get('/user', userController.getAllUsers);

// Rotas de Contato
const contatoController = require('../controllers/contatoController');

routes.get('/contato', contatoController.getAllContato);

// Rotas de Acesso
const acessoController = require('../controllers/acessoController');

routes.get('/acesso', acessoController.getAllAcesso);

// Rotas de Avisos
const avisosController = require('../controllers/avisosController');

routes.get('/avisos', avisosController.getAllAvisos);

// Rotas de Serviços
const servicosController = require('../controllers/servicosController');

routes.get('/servicos', servicosController.getAllServicos);

// Rotas do Sistema
const sistemasController = require('../controllers/sistemasController');

routes.get('/sistemas', sistemasController.getAllSistemas);

module.exports = routes;