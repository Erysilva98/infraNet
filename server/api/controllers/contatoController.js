const Contato = require('../models/contatoModel');

module.exports = {
    getAllContatos: async (req, res) => {
        try {
            const contatos = await Contato.findAll();
            res.json({ error: '', result: contatos });
        } catch (error) {
            res.status(500).json({ error: "Erro ao obter contatos." });
        }
    },

    getContato: async (req, res) => {
        let id = req.params.id;
        try {
            const contato = await Contato.findByPk(id);
            if (contato) {
                res.json({ error: '', result: contato });
            } else {
                res.status(404).json({ error: "Contato não encontrado." });
            }
        } catch (error) {
            res.status(500).json({ error: "Erro ao obter contato." });
        }
    },

    createContato: async (req, res) => {
        let { user_id, email, telefone, ramal } = req.body;

        try {
            const contato = await Contato.create({
                user_id,
                email,
                telefone,
                ramal
            });
            res.status(201).json({ error: '', result: contato });
        } catch (error) {
            res.status(500).json({ error: "Erro ao criar contato." });
        }
    },

    updateContato: async (req, res) => {
        let id = req.params.id;
        let { email, telefone, ramal } = req.body;

        try {
            const contato = await Contato.findByPk(id);
            if (contato) {
                contato.email = email || contato.email;
                contato.telefone = telefone || contato.telefone;
                contato.ramal = ramal || contato.ramal;

                await contato.save();
                res.json({ error: '', result: contato });
            } else {
                res.status(404).json({ error: "Contato não encontrado." });
            }
        } catch (error) {
            res.status(500).json({ error: "Erro ao atualizar contato." });
        }
    },

    deleteContato: async (req, res) => {
        let id = req.params.id;

        try {
            const contato = await Contato.findByPk(id);
            if (contato) {
                await contato.destroy();
                res.json({ error: '', result: "Contato deletado com sucesso." });
            } else {
                res.status(404).json({ error: "Contato não encontrado." });
            }
        } catch (error) {
            res.status(500).json({ error: "Erro ao deletar contato." });
        }
    }
};
