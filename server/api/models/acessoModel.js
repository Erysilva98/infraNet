const e = require('express');
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

    getAcesso: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM acesso WHERE id = ?', [id], (error, results) => {
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

module.exports = AcessoModel;