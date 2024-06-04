const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const acessoModel = require('../models/acessoModel');
require('dotenv').config();

class AuthController {
    async login(req, res) {
        await check('matricula').isLength({ min: 1 }).withMessage('Matrícula é obrigatória').run(req);
        await check('senha').isLength({ min: 1 }).withMessage('Senha é obrigatória').run(req);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { matricula, senha } = req.body;
            const { token, user } = await acessoModel.authenticate(matricula, senha);
            res.json({ error: '', token, user });
        } catch (error) {
            res.status(401).json({ error: 'Credenciais inválidas' });
        }
    }

    async verifyToken(req, res, next) {
        const token = req.headers['authorization'];
        if (!token) {
            return res.status(403).json({ error: 'Token não fornecido' });
        }

        try {
            const decoded = jwt.verify(token, process.env.ACESS_KEY);
            req.user = decoded;
            next();
        } catch (error) {
            res.status(403).json({ error: 'Token inválido' });
        }
    }
}

module.exports = new AuthController();
