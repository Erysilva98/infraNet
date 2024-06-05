require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./api/routes/routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`\n \n Servidor Rodando em: http://localhost:${port} \n \n`);
});

module.exports = app;

