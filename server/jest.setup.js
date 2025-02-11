const sequelize = require("./api/data/db");
require('dotenv').config({ path: '.env' });

beforeAll(async () => {
    await sequelize.authenticate();

});