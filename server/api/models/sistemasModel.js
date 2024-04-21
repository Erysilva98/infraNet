// models/SistemasModel.js
const BaseModel = require('./baseModel');
class SistemasModel extends BaseModel {
    constructor() {
        super('sistemas');
    }
}

module.exports = new SistemasModel();
