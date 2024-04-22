// controllers/SistemasController.js
const sistemasModel = require('../models/sistemasModel');

class SistemasController {
    async getAllSistemas(req, res) {
        try {
            const sistemas = await sistemasModel.getAll();
            return sistemas.map(sistema => ({
                id: sistema.id,
                img_path: sistema.img_path,
                titulo: sistema.titulo,
                link: sistema.link,
                descricao: sistema.descricao,
            }));
        } catch (error) {
            res.json({ error: error.message, result: [] });
        }
    }

    async getSistemaById(req, res) {
        try {
            const id = req.params.id;
            const sistema = await sistemasModel.getById(id);
            if (sistema) {
                const result = {
                    id: sistema.id,
                    img_path: sistema.img_path,
                    titulo: sistema.titulo,
                    link: sistema.link,
                    descricao: sistema.descricao,
                };
                res.json({ error: '', result });
            } else {
                res.json({ error: 'Sistema não encontrado', result: {} });
            }
        } catch (error) {
            res.json({ error: error.message, result: {} });
        }
    }
}

module.exports = new SistemasController();