const acessoModel = require('../models/acessoModel');

module.exports = {
    // GET /api/acesso
    // Get all acesso
    getAllAcesso: async (req, res) => {
        let json = {error:'', result:[]};

        let acesso = await acessoModel.getAllAcesso();

        for (let i in acesso) {
            json.result.push({
                id: acesso[i].id,
                user_id: acesso[i].user_id,
                cod_acesso: acesso[i].cod_acesso,
                matricula: acesso[i].matricula,
                senha: acesso[i].senha,
            });
        }   
        res.json(json);
    },

    // GET /api/acesso/:id
    // Get one acesso
    getAcesso: async (req, res) => {
        let json = {error:'', result:[]};

        let id = req.params.id;
        let acesso = await acessoModel.getAcesso(id);

        if (acesso) {
            json.result = acesso;
        }

        res.json(json);
    },

    // HEAD /api/acesso/:cod
    // Get one acesso
    headAcesso: async (req, res) => {
        let json = {error:'', result:[]};

        let cod = req.params.cod;
        let acesso = await acessoModel.headAcesso(cod);

        if (acesso) {
            json.result = acesso;
        }

        res.json(json);
    }
};