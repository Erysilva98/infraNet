// models/ServicosModel.js
const BaseModel = require('./baseModel');

class ServicosModel extends BaseModel {
    constructor() {
        super('servicos');
    }
}

module.exports = new ServicosModel();