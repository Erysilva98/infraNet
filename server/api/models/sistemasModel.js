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

};

module.exports = SistemasModel;