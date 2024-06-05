const { check, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');
const acessoModel = require('../models/acessoModel');
require('dotenv').config();

class AuthController {
    login = asyncHandler(async (req, res) => {
        await check('matricula').isLength({ min: 1 }).withMessage('Matrícula é obrigatória').run(req);
        await check('senha').isLength({ min: 1 }).withMessage('Senha é obrigatória').run(req);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { matricula, senha } = req.body;
            const user = await acessoModel.authenticate(matricula, senha);
            res.status(200).json({ message: 'Autenticação bem-sucedida' });
        } catch (error) {
            res.status(401).json({ error: 'Credenciais inválidas' });
        }
    });
}

module.exports = new AuthController();
