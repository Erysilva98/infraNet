const db = require('../data/db');

const ServicosModel = {
    getAllServicos: () => {
       return new Promise((resolve, reject) => {
            db.query('SELECT * FROM servicos', (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            });
        });
    },

};

module.exports = ServicosModel;