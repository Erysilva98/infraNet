const db = require('../data/db');

const contatoModel = {
    getAllContatos: () => {
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

    addContato: (user_id, email, telefone, ramal) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO contato (user_id, email, telefone, ramal) VALUES (?, ?, ?, ?)', [user_id, email, telefone, ramal], (error, results) => {
                if (error) { reject(error); return; }
                resolve(results.insertId);
            });
        });
    },
};

module.exports = contatoModel;
