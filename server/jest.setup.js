const sequelize = require("./api/data/db");
require('dotenv').config({ path: '.env' });


beforeAll(async () => {
    await sequelize.sync(); 
});

afterAll(async () => {
    await sequelize.close(); // Fecha a conexão do banco após os testes
});
