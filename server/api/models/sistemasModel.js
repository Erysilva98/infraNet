const db = require('../data/db');

const SistemasModel = {
    getAllSistemas: () => {
       return new Promise((resolve, reject) => {
            db.query('SELECT * FROM sistemas', (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            });
        });
    },

    getSistemas: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM sistemas WHERE id = ?', [id], (error, results) => {
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

module.exports = SistemasModel;