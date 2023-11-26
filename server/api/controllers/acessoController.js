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
    }
};