const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});


connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`\n \n Connected ao Banco MySQL: ${process.env.DB_DATABASE} \n \n`);
    }
});

module.exports = connection;