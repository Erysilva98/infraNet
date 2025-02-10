require('dotenv').config({ path: '.env' });

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./api/data/db'); // Conexão com Sequelize
const routes = require('./api/routes/routes');
const swaggerRoutes = require('./api/data/swagger');

const app = express();

// Configuração do CORS
app.use(cors());

// Configuração do Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Para aceitar JSON nas requisições

// Remova ou condicione o log de conexão bem-sucedida
sequelize.sync()
    .then(() => {
        if (process.env.NODE_ENV !== 'test') {
            console.log('Conexão com o banco de dados estabelecida com sucesso.');
        }
    })
    .catch(err => {
        console.error('Erro ao conectar-se ao banco de dados:', err);
    });


// Configurar as rotas da aplicação
app.use('/', routes);
app.use('/', swaggerRoutes);

module.exports = app; 
