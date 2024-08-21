const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // Extrai o token do cabeçalho Authorization
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).send({ error: 'Autenticação falhou! Token não fornecido.' });
    }

    try {
        // Verifica e decodifica o token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Anexa o usuário ao request para uso em rotas futuras
        req.user = decoded;

        // Chama o próximo middleware ou rota
        next();
    } catch (err) {
        // Se o token for inválido ou expirar, retorna erro 401
        res.status(401).send({ error: 'Autenticação falhou! Token inválido ou expirado.' });
    }
};
