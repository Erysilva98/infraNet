const servicosModel = require('../models/servicosModel');

module.exports = {
    // Get all servicos com paginação
    getAllServicos: async (req, res) => {
        try {
            let servicos;
            let page, pageSize, skip, limit;
            
            if (req && res) {
                page = parseInt(req.query.page) || 1;
                pageSize = parseInt(req.query.pageSize) || 10;
    
                skip = (page - 1) * pageSize;
                limit = pageSize;
    
                servicos = await servicosModel.getAllServicos(skip, limit);
            } else {
                servicos = await servicosModel.getAllServicos();
            }
    
            const result = servicos.map(servico => ({
                id: servico.id,
                img_path: servico.img_path,
                titulo: servico.titulo,
                link: servico.link,
                descricao: servico.descricao,
            }));

            if (res) {
                return res.json({ result });
            }
            return { result };
        } catch (error) {
            console.error('Erro ao obter os serviços:', error);
    
            if (res) {
                return res.status(500).json({ error: 'Erro ao obter os serviços' });
            }
            return { error: 'Erro ao obter os serviços' };
        }
    },

    getServicos: async (req, res) => {
        try {
            const id = req.params.id;
            const servico = await servicosModel.getServicos(id);

            if (!servico) {
                return res.status(404).json({ error: 'Serviço não encontrado' });
            }

            res.json({ result: servico });
        } catch (error) {
            console.error('Erro ao obter o serviço:', error);
            res.status(500).json({ error: 'Erro ao obter o serviço' });
        }
    },
};
