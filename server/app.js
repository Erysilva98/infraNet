require('dotenv').config({ path: '.env' });

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./api/data/db'); // Conexão com Sequelize
const routes = require('./api/routes/routes');
const swaggerRoutes = require('./api/data/swagger');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

app.use('/', routes);
app.use('/', swaggerRoutes);

if (process.env.NODE_ENV !== 'test') {
    sequelize.sync({ alter: true }) 
        .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso.'))
        .catch(err => console.error('Erro ao conectar-se ao banco de dados:', err));
} else {
    sequelize.authenticate() 
        .then(() => console.log('Banco de testes conectado.'))
        .catch(err => console.error('Erro ao conectar ao banco de testes:', err));
}

module.exports = app;
