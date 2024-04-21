// models/AvisosModel.js
const BaseModel = require('./baseModel');

class AvisosModel extends BaseModel {
    constructor() {
        super('avisos');
    }
}

module.exports = new AvisosModel();