// models/ModelManager.js
const AvisosModel = require('./avisosModel');
const ServicosModel = require('./servicosModel');
const SistemasModel = require('./sistemasModel');

class ModelManager {
    constructor() {
        this.models = {
            avisos: AvisosModel,
            servicos: ServicosModel,
            sistemas: SistemasModel
        };
    }

    getModel(modelName) {
        if (!this.models[modelName]) {
            throw new Error(`Model '${modelName}' not found`);
        }
        return this.models[modelName];
    }
}

module.exports = new ModelManager();

