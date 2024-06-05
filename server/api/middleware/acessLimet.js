const jwt = require('jsonwebtoken');
const acessoModel = require('../models/acessoModel');

async function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ error: 'Token não fornecido' });
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_KEY);
        const user = await acessoModel.findUserById(decoded.id);

        if (!user) {
            return res.status(401).json({ error: 'Token inválido' });
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Token inválido' });
    }
}

module.exports = verifyToken;