// controllers/ServicosController.js
const servicosModel = require('../models/servicosModel');

class ServicosController {
    async getAllServicos(req, res) {
        try {
            const servicos = await servicosModel.getAll();
            return servicos.map(servico => ({
                id: servico.id,
                img_path: servico.img_path,
                titulo: servico.titulo,
                link: servico.link,
                descricao: servico.descricao,
            }));
        } catch (error) {
            res.json({ error: error.message, result: [] });
        }
    }

    async getServicoById(req, res) {
        try {
            const id = req.params.id;
            const servico = await servicosModel.getById(id);
            if (servico) {
                const result = {
                    id: servico.id,
                    img_path: servico.img_path,
                    titulo: servico.titulo,
                    link: servico.link,
                    descricao: servico.descricao,
                };
                res.json({ error: '', result });
            } else {
                res.json({ error: 'Serviço não encontrado', result: {} });
            }
        } catch (error) {
            res.json({ error: error.message, result: {} });
        }
    }
}

module.exports = new ServicosController();