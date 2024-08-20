const Acesso = require('../models/acessoModel');

module.exports = {
    getAllAcessos: async (req, res) => {
        try {
            const acessos = await Acesso.findAll();
            res.json({ error: '', result: acessos });
        } catch (error) {
            res.status(500).json({ error: "Erro ao obter acessos." });
        }
    },

    getAcesso: async (req, res) => {
        let id = req.params.id;
        try {
            const acesso = await Acesso.findByPk(id);
            if (acesso) {
                res.json({ error: '', result: acesso });
            } else {
                res.status(404).json({ error: "Acesso não encontrado." });
            }
        } catch (error) {
            res.status500().json({ error: "Erro ao obter acesso." });
        }
    },

    createAcesso: async (req, res) => {
        let { user_id, cod_acesso, matricula, senha } = req.body;

        try {
            const acesso = await Acesso.create({
                user_id,
                cod_acesso,
                matricula,
                senha
            });
            res.status(201).json({ error: '', result: acesso });
        } catch (error) {
            res.status(500).json({ error: "Erro ao criar acesso." });
        }
    },

    updateAcesso: async (req, res) => {
        let id = req.params.id;
        let { cod_acesso, matricula, senha } = req.body;

        try {
            const acesso = await Acesso.findByPk(id);
            if (acesso) {
                acesso.cod_acesso = cod_acesso || acesso.cod_acesso;
                acesso.matricula = matricula || acesso.matricula;
                acesso.senha = senha || acesso.senha;

                await acesso.save();
                res.json({ error: '', result: acesso });
            } else {
                res.status(404).json({ error: "Acesso não encontrado." });
            }
        } catch (error) {
            res.status(500).json({ error: "Erro ao atualizar acesso." });
        }
    },

    deleteAcesso: async (req, res) => {
        let id = req.params.id;

        try {
            const acesso = await Acesso.findByPk(id);
            if (acesso) {
                await acesso.destroy();
                res.json({ error: '', result: "Acesso deletado com sucesso." });
            } else {
                res.status(404).json({ error: "Acesso não encontrado." });
            }
        } catch (error) {
            res.status(500).json({ error: "Erro ao deletar acesso." });
        }
    }
};
