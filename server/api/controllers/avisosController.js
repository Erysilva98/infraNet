const avisosModel = require('../models/avisosModel.js');

module.exports = {
    // GET /api/avisos
    // Get all avisos
    getAllAvisos: async (req, res) => {
        let json = { error: '', result: [] };
        try {
            let avisos = await avisosModel.getAllAvisos();
            json.result = avisos.map(aviso => ({
                id: aviso.id,
                img_path: aviso.img_path,
                prioridade: aviso.prioridade,
                data_publicacao: aviso.data_publicacao,
                link: aviso.link,
                titulo: aviso.titulo,
                subtitulo: aviso.subtitulo,
                descricao: aviso.descricao,
            }));
            return json; // Retorna os dados diretamente.
        } catch (error) {
            console.error("Erro ao buscar avisos", error);
            json.error = "Erro ao buscar avisos";
            return json; // Retorna o erro dentro do objeto json.
        }
    },

    // GET /api/avisos/:id
    // Get one avisos
    getAvisos: async (req, res) => {
        let json = {error:'', result:[]};

        let id = req.params.id;
        let avisos = await avisosModel.getAvisos(id);

        if (avisos) {
            json.result = avisos;
        }

        res.json(json);
    },
};