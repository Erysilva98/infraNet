const Sistemas = require('../models/sistemasModel');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });

module.exports = {
    getAllSistemas: async (req, res) => {
        try {
            const sistemas = await Sistemas.findAll();
            res.json({ error: '', result: sistemas });
        } catch (error) {
            res.status(500).json({ error: "Erro ao obter sistemas." });
        }
    },

    getSistema: async (req, res) => {
        let id = req.params.id;
        try {
            const sistema = await Sistemas.findByPk(id);
            if (sistema) {
                res.json({ error: '', result: sistema });
            } else {
                res.status(404).json({ error: "Sistema não encontrado." });
            }
        } catch (error) {
            res.status(500).json({ error: "Erro ao obter sistema." });
        }
    },

    createSistema: [
        upload.single('img_path'),
        async (req, res) => {
            try {
                const imgBase64 = req.file.buffer.toString('base64');  // Convertendo para Base64
                const sistema = await Sistemas.create({
                    img_path: imgBase64,  // Salvando a imagem como Base64
                    titulo: req.body.titulo,
                    link: req.body.link,
                    descricao: req.body.descricao,
                });
                res.status(201).json({ error: '', result: sistema });
            } catch (error) {
                res.status(500).json({ error: "Erro ao criar sistema." });
            }
        }
    ],

    updateSistema: async (req, res) => {
        let id = req.params.id;
        let { titulo, link, descricao } = req.body;

        try {
            const sistema = await Sistemas.findByPk(id);
            if (sistema) {
                sistema.titulo = titulo || sistema.titulo;
                sistema.link = link || sistema.link;
                sistema.descricao = descricao || sistema.descricao;

                await sistema.save();
                res.json({ error: '', result: sistema });
            } else {
                res.status(404).json({ error: "Sistema não encontrado." });
            }
        } catch (error) {
            res.status(500).json({ error: "Erro ao atualizar sistema." });
        }
    },

    deleteSistema: async (req, res) => {
        let id = req.params.id;

        try {
            const sistema = await Sistemas.findByPk(id);
            if (sistema) {
                await sistema.destroy();
                res.json({ error: '', result: "Sistema deletado com sucesso." });
            } else {
                res.status(404).json({ error: "Sistema não encontrado." });
            }
        } catch (error) {
            res.status(500).json({ error: "Erro ao deletar sistema." });
        }
    }
};
