const express = require('express');
const routes = express.Router();  
const avisosController = require('../controllers/AvisosController');
const servicosController = require('../controllers/ServicosController');
const sistemasController = require('../controllers/SistemasController');

// Rotas do Home
routes.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<title>API</title> <h1>Servidor Rodando</h1> <p>Escolha uma Rota</p>');
    res.end();
});

// Usando 'routes' em vez de 'router'
routes.get('/api/avisos', avisosController.getAllAvisos);
routes.get('/api/avisos/:id', avisosController.getAvisoById);
routes.get('/api/servicos', servicosController.getAllServicos);
routes.get('/api/servicos/:id', servicosController.getServicoById);
routes.get('/api/sistemas', sistemasController.getAllSistemas);
routes.get('/api/sistemas/:id', sistemasController.getSistemaById);

module.exports = routes;

