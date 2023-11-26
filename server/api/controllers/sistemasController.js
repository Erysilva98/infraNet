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
    }
};

