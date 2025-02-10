const sequelize = require("./api/data/db");
require('dotenv').config({ path: '.env' });


beforeAll(async () => {
    await sequelize.sync({ force: true }); // Reseta o banco antes de iniciar os testes
});

afterAll(async () => {
    await sequelize.close(); // Fecha a conexão do banco após os testes
});
