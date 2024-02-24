const userModel = require('../models/userModel');
const contatoModel = require('../models/contatoModel');
const acessoModel = require('../models/acessoModel');

module.exports = {
    // GET /api/users
    // Get all users
    getAllUsers: async (req, res) => {
        try {
            let json = { error: '', result: [] };

            // Fetch users, contatos, and acessos concurrently
            // Handle rejected promises
            const [users, contatos, acessos] = await Promise.all([
                userModel.getAllUsers(),
                contatoModel.getAllContatos(),
                acessoModel.getAllAcessos(),
            ]).catch(error => {
                console.error("Error fetching data: ", error);
                res.status(500).json({ error: "Internal Server Error Promise" });
            });


            // Debugging
            console.log("Users: ", users);
            console.log("Contatos: ", contatos);
            console.log("Acessos: ", acessos);


            // Create a map for faster lookup of contatos and acessos
            const contatosMap = new Map(contatos.map(contato => [contato.user_id, contato]));
            const acessosMap = new Map(acessos.map(acesso => [acesso.user_id, acesso]));

            // Combine data
            for (let i in users) {
                const contato = contatosMap.get(users[i].id);
                const acesso = acessosMap.get(users[i].id);

                json.result.push({
                    id: users[i].id,
                    username: users[i].username,
                    password: users[i].password,
                    data_nascimento: users[i].data_nascimento,
                    email: contato ? contato.email : null,
                    telefone: contato ? contato.telefone : null,
                    ramal: contato ? contato.ramal : null,
                    acesso: acesso ? acesso.acesso : null,
                });
            }

            res.json(json);
        } catch (error) {
            console.error("Error ao Obter os Dados ", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },

    // GET /api/users/:id
    // Get a single user
    getUser: async (req, res) => {
        let json = { error: '', result: [] };

        let id = req.params.id;
        let user = await userModel.getUser(id);

        if (user) {
            json.result = user;
        }

        res.json(json);
    },

    // POST /api/users
    // Create a new user
    createUser: async (req, res) => {
        let json = { error: '', result: [] };

        let username = req.body.username;
        let password = req.body.password;
        let data_nascimento = req.body.data_nascimento;

        if (username && password && data_nascimento) {
            let userId = await userModel.addUser(username, password, data_nascimento);
            json.result = {
                id: userId,
                username,
                password,
                data_nascimento
            };
        } else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },
};


