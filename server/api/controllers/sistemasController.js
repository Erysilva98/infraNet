const sistemasModel = require("../models/sistemasModel");

module.exports = {
    // GET /api/sistemas

    // Get all sistemas
    getAllSistemas: async (req, res) => {
        try {
            let sistemas = await sistemasModel.getAllSistemas();
            const result = sistemas.map(sistema => ({
                id: sistema.id,
                img_path: sistema.img_path,
                titulo: sistema.titulo,
                link: sistema.link,
                descricao: sistema.descricao,
            }));
    
            if (res) {
                return res.json({ result });
            }
    
            return { result };
        } catch (error) {
            console.error('Erro ao obter os sistemas:', error);
    
            if (res) {
                return res.status(500).json({ error: 'Erro ao obter os sistemas' });
            }
    
            return { error: 'Erro ao obter os sistemas' };
        }
    },

    // GET /api/sistemas/:id
    // Get one sistemas
    getSistemas: async (req, res) => {
        let json = {error:'', result:[]};

        let id = req.params.id;
        let sistemas = await sistemasModel.getSistemas(id);

        if (sistemas) {
            json.result = sistemas;
        }

        res.json(json);
    },
};

