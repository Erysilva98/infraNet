// models/ModelManager.js
const acessoModel = require('./acessoModel');
const AvisosModel = require('./avisosModel');
const ServicosModel = require('./servicosModel');
const SistemasModel = require('./sistemasModel');

class ModelManager {
    constructor() {
        this.models = {
            acesso: acessoModel,
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

