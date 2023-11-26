const servicosModel = require('../models/servicosModel');

module.exports = {
    // GET /api/servicos
    // Get all servicos
    getAllServicos: async (req, res) => {
        let json = {error:'', result:[]};

        let servicos = await servicosModel.getAllServicos();

        for (let i in servicos) {
            json.result.push({
                id: servicos[i].id,
                img_path: servicos[i].img_path,
                titulo: servicos[i].titulo,
                link: servicos[i].link,
                descricao: servicos[i].descricao,
            });
        }   
        res.json(json);
    },

    // GET /api/servicos/:id
    // Get one servicos
    getServicos: async (req, res) => {
        let json = {error:'', result:[]};

        let id = req.params.id;
        let servicos = await servicosModel.getServicos(id);

        if (servicos) {
            json.result = servicos;
        }

        res.json(json);
    },
};