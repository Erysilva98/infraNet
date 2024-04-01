require('dotenv').config({ path: '.env' });

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./api/routes/routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));

server.use('/', routes);

server.listen(process.env.PORT, () => {
  console.log(`\n \n Servidor Rodando em: http://localhost:${process.env.PORT} \n \n`);
});
