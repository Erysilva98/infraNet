require('dotenv').config({ path: '.env' });

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./api/data/db'); // Conexão com o Sequelize
const routes = require('./api/routes/routes');
const swaggerRoutes = require('./api/data/swagger');

const server = express();

// Configuração do CORS
server.use(cors());

// Configuração do Body Parser
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json()); // Para aceitar JSON nas requisições

// Sincronizar o Sequelize com o banco de dados
sequelize.sync()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    })
    .catch(err => {
        console.error('Erro ao conectar-se ao banco de dados:', err);
    });

// Configurar as rotas da aplicação
server.use('/', routes);
server.use('/', swaggerRoutes);

// Iniciar o servidor
server.listen(process.env.PORT, () => {
    console.log(`\n \n Servidor Rodando em: http://localhost:${process.env.PORT} \n \n`);
});
