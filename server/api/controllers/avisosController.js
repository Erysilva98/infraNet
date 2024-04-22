// controllers/AvisosController.js
const avisosModel = require('../models/avisosModel');

class AvisosController {
    async getAllAvisos(req, res) {
        try {
            const avisos = await avisosModel.getAll();
            return avisos.map(aviso => ({
                id: aviso.id,
                img_path: aviso.img_path,
                prioridade: aviso.prioridade,
                data_publicacao: aviso.data_publicacao,
                link: aviso.link,
                titulo: aviso.titulo,
                subtitulo: aviso.subtitulo,
                descricao: aviso.descricao,
            }));
        } catch (error) {
            res.json({ error: error.message, result: [] });
        }
    }

    async getAvisoById(req, res) {
        try {
            const id = req.params.id;
            const aviso = await avisosModel.getById(id);
            if (aviso) {
                const result = {
                    id: aviso.id,
                    img_path: aviso.img_path,
                    prioridade: aviso.prioridade,
                    data_publicacao: aviso.data_publicacao,
                    link: aviso.link,
                    titulo: aviso.titulo,
                    subtitulo: aviso.subtitulo,
                    descricao: aviso.descricao,
                };
                res.json({ error: '', result });
            } else {
                res.json({ error: 'Aviso não encontrado', result: {} });
            }
        } catch (error) {
            res.json({ error: error.message, result: {} });
        }
    }
}

module.exports = new AvisosController();