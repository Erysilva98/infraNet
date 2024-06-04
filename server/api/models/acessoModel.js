const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../data/db');
require('dotenv').config();

class AcessoModel {
    constructor() {
        this.table = 'acesso';
    }

    async createUser(matricula, senha) {
        const hashedPassword = await bcrypt.hash(senha, 10);
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO ${this.table} (matricula, senha) VALUES (?, ?)`, [matricula, hashedPassword], (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results.insertId);
            });
        });
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

        if (!user || !await bcrypt.compare(senha, user.senha)) {
            throw new Error('Invalid credentials');
        }

        const token = jwt.sign({ id: user.id, matricula: user.matricula }, process.env.ACESS_KEY, { expiresIn: '1h' });
        return { token, user };
    }
}

module.exports = new AcessoModel();
