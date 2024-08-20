const Avisos = require('../models/avisosModel');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });

module.exports = {
    getAllAvisos: async (req, res) => {
        try {
            const avisos = await Avisos.findAll();
            res.json({ error: '', result: avisos });
        } catch (error) {
            res.status(500).json({ error: "Erro ao obter avisos." });
        }
    },

    getAvisos: async (req, res) => {
        let id = req.params.id;
        try {
            const aviso = await Avisos.findByPk(id);
            if (aviso) {
                res.json({ error: '', result: aviso });
            } else {
                res.status(404).json({ error: "Aviso não encontrado." });
            }
        } catch (error) {
            res.status(500).json({ error: "Erro ao obter aviso." });
        }
    },

    createAviso: [
        upload.single('img_data'),
        async (req, res) => {
            try {
                const imgBase64 = req.file.buffer.toString('base64');  // Convertendo para Base64
                const aviso = await Avisos.create({
                    img_data: imgBase64,  // Salvando a imagem como Base64
                    titulo: req.body.titulo,
                    prioridade: req.body.prioridade,
                    data_publicacao: req.body.data_publicacao,
                    link: req.body.link,
                    subtitulo: req.body.subtitulo,
                    descricao: req.body.descricao,
                });
                res.status(201).json({ error: '', result: aviso });
            } catch (error) {
                res.status(500).json({ error: "Erro ao criar aviso." });
            }
        }
    ],

    updateAviso: async (req, res) => {
        let id = req.params.id;
        let { titulo, prioridade, data_publicacao, link, subtitulo, descricao } = req.body;

        try {
            const aviso = await Avisos.findByPk(id);
            if (aviso) {
                aviso.titulo = titulo || aviso.titulo;
                aviso.prioridade = prioridade || aviso.prioridade;
                aviso.data_publicacao = data_publicacao || aviso.data_publicacao;
                aviso.link = link || aviso.link;
                aviso.subtitulo = subtitulo || aviso.subtitulo;
                aviso.descricao = descricao || aviso.descricao;

                await aviso.save();
                res.json({ error: '', result: aviso });
            } else {
                res.status(404).json({ error: "Aviso não encontrado." });
            }
        } catch (error) {
            res.status(500).json({ error: "Erro ao atualizar aviso." });
        }
    },

    deleteAviso: async (req, res) => {
        let id = req.params.id;

        try {
            const aviso = await Avisos.findByPk(id);
            if (aviso) {
                await aviso.destroy();
                res.json({ error: '', result: "Aviso deletado com sucesso." });
            } else {
                res.status(404).json({ error: "Aviso não encontrado." });
            }
        } catch (error) {
            res.status(500).json({ error: "Erro ao deletar aviso." });
        }
    }
};
