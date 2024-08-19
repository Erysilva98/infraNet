const Servicos = require('../models/servicosModel');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });

module.exports = {
    getAllServicos: async (req, res) => {
        try {
            const servicos = await Servicos.findAll();
            res.json({ error: '', result: servicos });
        } catch (error) {
            res.status(500).json({ error: "Erro ao obter serviços." });
        }
    },

    getServico: async (req, res) => {
        let id = req.params.id;
        try {
            const servico = await Servicos.findByPk(id);
            if (servico) {
                res.json({ error: '', result: servico });
            } else {
                res.status(404).json({ error: "Serviço não encontrado." });
            }
        } catch (error) {
            res.status(500).json({ error: "Erro ao obter serviço." });
        }
    },

    createServico: [
        upload.single('img_path'),
        async (req, res) => {
            try {
                const imgBase64 = req.file.buffer.toString('base64');  // Convertendo para Base64
                const servico = await Servicos.create({
                    img_path: imgBase64,  // Salvando a imagem como Base64
                    titulo: req.body.titulo,
                    link: req.body.link,
                    descricao: req.body.descricao,
                });
                res.status(201).json({ error: '', result: servico });
            } catch (error) {
                res.status(500).json({ error: "Erro ao criar serviço." });
            }
        }
    ],

    updateServico: async (req, res) => {
        let id = req.params.id;
        let { titulo, link, descricao } = req.body;

        try {
            const servico = await Servicos.findByPk(id);
            if (servico) {
                servico.titulo = titulo || servico.titulo;
                servico.link = link || servico.link;
                servico.descricao = descricao || servico.descricao;

                await servico.save();
                res.json({ error: '', result: servico });
            } else {
                res.status(404).json({ error: "Serviço não encontrado." });
            }
        } catch (error) {
            res.status(500).json({ error: "Erro ao atualizar serviço." });
        }
    },

    deleteServico: async (req, res) => {
        let id = req.params.id;

        try {
            const servico = await Servicos.findByPk(id);
            if (servico) {
                await servico.destroy();
                res.json({ error: '', result: "Serviço deletado com sucesso." });
            } else {
                res.status(404).json({ error: "Serviço não encontrado." });
            }
        } catch (error) {
            res.status(500).json({ error: "Erro ao deletar serviço." });
        }
    }
};
