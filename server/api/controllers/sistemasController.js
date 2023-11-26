const sistemasModel = require("../models/sistemasModel");

module.exports = {
    // GET /api/sistemas

    // Get all sistemas
    getAllSistemas: async (req, res) => {
        let json = {error:'', result:[]};

        let sistemas= await sistemasModel.getAllSistemas();

        for (let i in sistemas) {
            json.result.push({
                id: sistemas[i].id,
                img_path: sistemas[i].img_path,
                titulo: sistemas[i].titulo,
                link: sistemas[i].link,
                descricao: sistemas[i].descricao,
            });
        }   
        res.json(json);
    },

    // GET /api/sistemas/:id
    // Get one sistemas
    getSistemas: async (req, res) => {
        let json = {error:'', result:[]};

        let id = req.params.id;
        let sistemas = await sistemasModel.getSistemas(id);

        if (sistemas) {
            json.result = sistemas;
        }

        res.json(json);
    },
};

