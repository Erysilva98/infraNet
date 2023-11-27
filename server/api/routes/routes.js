const express = require('express');
const routes = express.Router();
const path = require('path');

// Rotas do Home
routes.get('/', (req, res) => {
    res.statusCode = 200;
    res.write('<Title>API</Title> <h1>Servidor Rodando</h1> <p>Escolha uma Rota</p>');
});

// Rotas do Usuário
const userController = require('../controllers/userController');

routes.get('/user', userController.getAllUsers);
routes.get('/user/:id', userController.getUser);
routes.post('/user', userController.createUser);

// Rotas de Contato
const contatoController = require('../controllers/contatoController');

routes.get('/contato', contatoController.getAllContato);
routes.get('/contato/:id', contatoController.getContato);
routes.post('/contato', contatoController.createContato);

// Rotas de Acesso
const acessoController = require('../controllers/acessoController');

routes.get('/acesso', acessoController.getAllAcesso);
routes.get('/acesso/:id', acessoController.getAcesso);

// Rotas de Avisos
const avisosController = require('../controllers/avisosController');

routes.get('/avisos', avisosController.getAllAvisos);
routes.get('/avisos/:id', avisosController.getAvisos);

// Rotas de Serviços
const servicosController = require('../controllers/servicosController');

routes.get('/servicos', servicosController.getAllServicos);
routes.get('/servicos/:id', servicosController.getServicos);

// Rotas do Sistema
const sistemasController = require('../controllers/sistemasController');

routes.get('/sistemas', sistemasController.getAllSistemas);
routes.get('/sistemas/:id', sistemasController.getSistemas);


module.exports = routes;

