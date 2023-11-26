const avisosModel = require('../models/avisosModel.js');

module.exports = {
    // GET /api/avisos
    // Get all avisos
    getAllAvisos: async (req, res) => {
        let json = {error:'', result:[]};

        let avisos = await avisosModel.getAllAvisos();

        for (let i in avisos) {
            json.result.push({
                id: avisos[i].id,
                img_path: avisos[i].img_path,
                prioridade: avisos[i].prioridade,
                data_publicacao: avisos[i].data_publicacao,
                titulo: avisos[i].titulo,
                subtitulo: avisos[i].subtitulo,
                descricao: avisos[i].descricao,
            });
        }   
        res.json(json);
    }
};