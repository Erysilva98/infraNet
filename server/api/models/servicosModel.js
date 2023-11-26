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

    getServicos: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM servicos WHERE id = ?', [id], (error, results) => {
                if (error) { reject(error); return; }
                if (results.length > 0) {
                    resolve(results[0]);
                } else {
                    resolve(false);
                }
            });
        });
    },

};

module.exports = ServicosModel;