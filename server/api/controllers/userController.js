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
    }
};


