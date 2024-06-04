const express = require('express');
const routes = express.Router();
const avisosController = require('../controllers/AvisosController');
const servicosController = require('../controllers/ServicosController');
const sistemasController = require('../controllers/SistemasController');
const AuthController = require('../controllers/AuthController');
const rateLimit = require('express-rate-limit');

// Configurer le limiteur de tentatives de connexion
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limiter à 5 tentatives par IP et par `windowMs`
    message: 'Trop de tentatives de connexion, veuillez réessayer plus tard.',
});

// Rotas do Home
routes.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<title>API</title> <h1>Servidor Rodando</h1> <p>Escolha uma Rota</p>');
    res.end();
});

// Rota agregada para buscar todos os dados
routes.get('/api/apiDados', async (req, res) => {
    try {
        const avisos = await avisosController.getAllAvisos(req, res);
        const servicos = await servicosController.getAllServicos(req, res);
        const sistemas = await sistemasController.getAllSistemas(req, res);

        const results = await Promise.all([avisos, servicos, sistemas]);
        res.json({
            avisos: results[0],
            servicos: results[1],
            sistemas: results[2],
        });
    } catch (error) {
        console.error('Erro detalhado:', error);
        res.status(500).json({ message: 'Erro ao buscar dados', error: error.message });
    }
});

// Usando 'routes' em vez de 'router'
routes.get('/api/avisos', avisosController.getAllAvisos);
routes.get('/api/avisos/:id', avisosController.getAvisoById);

routes.get('/api/servicos', servicosController.getAllServicos);
routes.get('/api/servicos/:id', servicosController.getServicoById);

routes.get('/api/sistemas', sistemasController.getAllSistemas);
routes.get('/api/sistemas/:id', sistemasController.getSistemaById);

routes.post('/api/login', loginLimiter, AuthController.login); 

module.exports = routes;
