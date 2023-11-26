const userModel = require('../models/userModel');

module.exports = {
    // GET /api/users
    // Get all users
    getAllUsers: async (req, res) => {
        let json = {error:'', result:[]};

        let users = await userModel.getAllUsers();

        for (let i in users) {
            json.result.push({
                id: users[i].id,
                username: users[i].username,
                password: users[i].password,
                data_nascimento: users[i].data_nascimento,
            });
        }   
        res.json(json);
    },

    // GET /api/users/:id
    // Get a single user
    getUser: async (req, res) => {
        let json = {error:'', result:[]};

        let id = req.params.id;
        let user = await userModel.getUser(id);

        if (user) {
            json.result = user;
        }

        res.json(json);
    },
};


