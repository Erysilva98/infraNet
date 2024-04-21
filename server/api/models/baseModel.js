// models/BaseModel.js
const db = require('../data/db');

class BaseModel {
    constructor(table) {
        this.table = table;
    }

    getAll() {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM ${this.table}`, (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        });
    }

    getById(id) {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id], (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results.length > 0 ? results[0] : null);
            });
        });
    }
}

module.exports = BaseModel;
