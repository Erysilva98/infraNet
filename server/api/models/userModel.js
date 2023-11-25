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

};

module.exports = UserModel;