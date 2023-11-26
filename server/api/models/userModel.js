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
};

module.exports = UserModel;