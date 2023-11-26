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

};

module.exports = AvisosModel;