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

    getContato: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM contato WHERE id = ?', [id], (error, results) => {
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

module.exports = ContatoModel;