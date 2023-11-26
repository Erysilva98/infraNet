const db = require('../data/db');

const AcessoModel = {
    getAllAcesso: () => {
       return new Promise((resolve, reject) => {
            db.query('SELECT * FROM acesso', (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            });
        });
    },

};

module.exports = AcessoModel;