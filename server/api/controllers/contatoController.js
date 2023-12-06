const contatoModel = require('../models/contatoModel');

module.exports = {
    // GET /api/contato

    // Get all contato
    getAllContato: async (req, res) => {
        let json = {error:'', result:[]};

        let contato = await contatoModel.getAllContato();

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
    },

    // GET /api/contato/:id
    // Get a single contato
    getContato: async (req, res) => {
        let json = {error:'', result:[]};

        let id = req.params.id;
        let contato = await contatoModel.getContato(id);

        if (contato) {
            json.result = contato;
        }

        res.json(json);
    },

    // POST /api/contato
    // Create a new contato
    createContato: async (req, res) => {
        let json = {error:'', result:[]};

        let user_id = req.body.user_id;
        let email = req.body.email;
        let telefone = req.body.telefone;
        let ramal = req.body.ramal;

        if (user_id && email && telefone && ramal) {
            let contatoId = await ContatoModel.addContato(user_id, email, telefone, ramal);
            json.result = {
                id: contatoId,
                user_id,
                email,
                telefone,
                ramal
            };
        } else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },
};