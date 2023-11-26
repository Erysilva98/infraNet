const ContatoModel = require('../models/contatoModel');

module.exports = {
    // GET /api/contato

    // Get all contato
    getAllContato: async (req, res) => {
        let json = {error:'', result:[]};

        let contato = await ContatoModel.getAllContato();

        for (let i in contato) {
            json.result.push({
                id: contato[i].id,
                user_id: contato[i].user_id,
                email: contato[i].email,
                telefone: contato[i].telefone,
                ramal: contato[i].ramal,
            });
        }   
        res.json(json);
    }
};