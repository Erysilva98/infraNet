const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');
const authMiddleware = require('../middlewares/auth');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            let json = { error: '', result: [] };

            const users = await UserModel.getAllUsers();

            json.result = users;
            res.json(json);
        } catch (error) {
            res.status(500).json({ error: "Erro ao obter usuários." });
        }
    },

    getUser: async (req, res) => {
        let json = { error: '', result: {} };

        let id = req.params.id;
        let user = await UserModel.getUser(id);

        if (user) {
            json.result = user;
        }

        res.json(json);
    },

    createUser: async (req, res) => {
        let json = { error: '', result: {} };

        let { username, password, data_nascimento } = req.body;

        if (username && password && data_nascimento) {
            const hashedPassword = bcrypt.hashSync(password, 8);
            let userId = await UserModel.addUser(username, hashedPassword, data_nascimento);
            json.result = {
                id: userId,
                username,
                data_nascimento
            };
        } else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    updateUser: async (req, res) => {
        let json = { error: '', result: {} };

        let id = req.params.id;
        let { username, password, data_nascimento } = req.body;

        const updatedData = {
            username,
            data_nascimento,
        };

        if (password) {
            updatedData.password = bcrypt.hashSync(password, 8);
        }

        const user = await UserModel.updateUser(id, updatedData);

        if (user) {
            json.result = user;
        } else {
            json.error = 'Usuário não encontrado';
        }

        res.json(json);
    },

    deleteUser: async (req, res) => {
        let json = { error: '', result: {} };

        let id = req.params.id;
        const success = await UserModel.deleteUser(id);

        if (success) {
            json.result = "Usuário deletado com sucesso";
        } else {
            json.error = 'Usuário não encontrado';
        }

        res.json(json);
    },

    login: async (req, res) => {
        let { username, password } = req.body;

        try {
            // Verifica se o usuário existe no banco de dados
            const user = await UserModel.getUserByUsername(username);
            if (!user) {
                console.log('Usuário não encontrado:', username);
                return res.status(401).send({ error: 'Credenciais inválidas!' });
            }

            // Compara a senha fornecida com a senha armazenada
            const passwordIsValid = bcrypt.compareSync(password, user.password);
            if (!passwordIsValid) {
                console.log('Senha incorreta para o usuário:', username);
                return res.status(401).send({ error: 'Credenciais inválidas!' });
            }

            // Gera um token JWT para o usuário autenticado
            const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.send({ token });
        } catch (err) {
            console.error('Erro no login:', err);
            res.status(500).send({ error: 'Erro no login!' });
        }
    }
};
