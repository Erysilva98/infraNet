const bcrypt = require('bcrypt');
const db = require('../data/db');
require('dotenv').config();

class AcessoModel {
    constructor() {
        this.table = 'acesso';
    }

    async authenticate(matricula, senha) {
        const user = await new Promise((resolve, reject) => {
            db.query(`SELECT * FROM ${this.table} WHERE matricula = ?`, [matricula], (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results.length > 0 ? results[0] : null);
            });
        });

        if (!user) {
            throw new Error('Invalid credentials');
        }

        const isPasswordValid = await bcrypt.compare(senha, user.senha);
        if (!isPasswordValid) {
            throw new Error('Invalid credentials');
        }

        return user;
    }
}

module.exports = new AcessoModel();
