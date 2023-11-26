const db = require('../data/db');

const AvisosModel = {
    getAllAvisos: () => {
       return new Promise((resolve, reject) => {
            db.query('SELECT * FROM avisos', (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            });
        });
    },

    getAvisos: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM avisos WHERE id = ?', [id], (error, results) => {
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

module.exports = AvisosModel;