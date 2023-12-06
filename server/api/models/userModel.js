const db = require('../data/db');

const UserModel = {
    getAllUsers: () => {
       return new Promise((resolve, reject) => {
            db.query('SELECT * FROM user', (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            });
        });
    },

    getUser: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM user WHERE id = ?', [id], (error, results) => {
                if (error) { reject(error); return; }
                if (results.length > 0) {
                    resolve(results[0]);
                } else {
                    resolve(false);
                }
            });
        });
    },

    addUser: (username, password, data_nascimento) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO user (username, password, data_nascimento) VALUES (?, ?, ?)', [username, password, data_nascimento], (error, results) => {
                if (error) { reject(error); return; }
                resolve(results.insertId);
            });
        });
    },
};

module.exports = UserModel;