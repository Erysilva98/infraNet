const express = require('express');
const routes = express.Router();

// Importar os controllers
const avisosController = require('../controllers/avisosController');
const servicosController = require('../controllers/servicosController');
const sistemasController = require('../controllers/sistemasController');

// Rotas do Home
routes.get('/', (req, res) => {
    res.statusCode = 200;
    res.write('<Title>API</Title> <h1>Servidor Rodando</h1> <p>Escolha uma Rota</p>');
});


// Rota de envio de todos os dados
routes.get('/apiDados', async (req, res) => {
    try {
        const avisos = await avisosController.getAllAvisos();
        const servicos = await servicosController.getAllServicos();
        const sistemas = await sistemasController.getAllSistemas();

        const apiDados = {
            avisos: avisos.result, 
            servicos: servicos.result,
            sistemas: sistemas.result
        };

        res.status(200).json(apiDados); // Enviar os dados agregados
    } catch (error) {
        console.error("Erro ao obter os dados: ", error);
        res.status(500).send("Erro no servidor ao tentar buscar todos os dados.");
    }
});

// Rotas do Usuário

// Rotas de Avisos
routes.get('/avisos', avisosController.getAllAvisos);
routes.get('/avisos/:id', avisosController.getAvisos);

// Rotas de Serviços
routes.get('/servicos', servicosController.getAllServicos);
routes.get('/servicos/:id', servicosController.getServicos);

// Rotas do Sistema
routes.get('/sistemas', sistemasController.getAllSistemas);
routes.get('/sistemas/:id', sistemasController.getSistemas);


module.exports = routes;

