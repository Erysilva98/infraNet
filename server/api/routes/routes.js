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


