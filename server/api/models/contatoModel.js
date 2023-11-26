const db = require('../data/db');

const ContatoModel = {
    getAllContato: () => {
       return new Promise((resolve, reject) => {
            db.query('SELECT * FROM contato', (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            });
        });
    },

};

module.exports = ContatoModel;