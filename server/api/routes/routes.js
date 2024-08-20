const express = require('express');
const routes = express.Router();
const authMiddleware = require('../middlewares/auth');

// Controladores
const userController = require('../controllers/userController');
const avisosController = require('../controllers/avisosController');
const servicosController = require('../controllers/servicosController');
const sistemasController = require('../controllers/sistemasController');
const contatoController = require('../controllers/contatoController');
const acessoController = require('../controllers/acessoController');

// Rota Home
routes.get('/', (req, res) => {
    res.status(200).send('<Title>API</Title> <h1>Servidor Rodando</h1> <p>Escolha uma Rota</p>');
});

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - password
 *         - data_nascimento
 *       properties:
 *         id:
 *           type: integer
 *           description: O ID do usuário
 *         username:
 *           type: string
 *           description: O nome de usuário
 *         password:
 *           type: string
 *           description: A senha do usuário
 *         data_nascimento:
 *           type: string
 *           format: date
 *           description: A data de nascimento do usuário
 *       example:
 *         id: 1
 *         username: exampleUser
 *         password: mypassword
 *         data_nascimento: 1990-01-01
 *     Aviso:
 *       type: object
 *       required:
 *         - titulo
 *         - descricao
 *       properties:
 *         id:
 *           type: integer
 *           description: O ID do aviso
 *         titulo:
 *           type: string
 *           description: O título do aviso
 *         descricao:
 *           type: string
 *           description: A descrição do aviso
 *         prioridade:
 *           type: integer
 *           description: A prioridade do aviso
 *         data_publicacao:
 *           type: string
 *           format: date
 *           description: A data de publicação do aviso
 *       example:
 *         id: 1
 *         titulo: Aviso Importante
 *         descricao: "Este é um aviso muito importante."
 *         prioridade: 1
 *         data_publicacao: 2023-01-01
 *     Sistema:
 *       type: object
 *       required:
 *         - titulo
 *         - descricao
 *       properties:
 *         id:
 *           type: integer
 *           description: O ID do sistema
 *         titulo:
 *           type: string
 *           description: O título do sistema
 *         descricao:
 *           type: string
 *           description: A descrição do sistema
 *         link:
 *           type: string
 *           description: O link do sistema
 *       example:
 *         id: 1
 *         titulo: Sistema X
 *         descricao: "Descrição do sistema."
 *         link: "https://sistemax.com"
 *     Servico:
 *       type: object
 *       required:
 *         - titulo
 *         - descricao
 *       properties:
 *         id:
 *           type: integer
 *           description: O ID do serviço
 *         titulo:
 *           type: string
 *           description: O título do serviço
 *         descricao:
 *           type: string
 *           description: A descrição do serviço
 *         link:
 *           type: string
 *           description: O link do serviço
 *       example:
 *         id: 1
 *         titulo: Serviço Y
 *         descricao: "Descrição do serviço."
 *         link: "https://servicoy.com"
 *     Contato:
 *       type: object
 *       required:
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: O ID do contato
 *         user_id:
 *           type: integer
 *           description: O ID do usuário relacionado
 *         email:
 *           type: string
 *           description: O email do contato
 *         telefone:
 *           type: string
 *           description: O telefone do contato
 *         ramal:
 *           type: string
 *           description: O ramal do contato
 *       example:
 *         id: 1
 *         user_id: 1
 *         email: "example@example.com"
 *         telefone: "123456789"
 *         ramal: "101"
 *     Acesso:
 *       type: object
 *       required:
 *         - cod_acesso
 *         - matricula
 *         - senha
 *       properties:
 *         id:
 *           type: integer
 *           description: O ID do acesso
 *         user_id:
 *           type: integer
 *           description: O ID do usuário relacionado
 *         cod_acesso:
 *           type: string
 *           description: O código de acesso
 *         matricula:
 *           type: string
 *           description: A matrícula do usuário
 *         senha:
 *           type: string
 *           description: A senha de acesso
 *       example:
 *         id: 1
 *         user_id: 1
 *         cod_acesso: "ABC123"
 *         matricula: "123456789"
 *         senha: "senha123"
 */

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Retorna a lista de todos os usuários
 *     tags: [User]
 *     responses:
 *       200:
 *         description: A lista de usuários.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
routes.get('/user', userController.getAllUsers);

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Retorna um único usuário pelo ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário retornado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuário não encontrado
 */
routes.get('/user/:id', userController.getUser);

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Campos faltantes
 */
routes.post('/user', userController.createUser);

/**
 * @swagger
 * /user/{id}:
 *   put:
 *     summary: Atualiza um usuário existente
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuário não encontrado
 */
routes.put('/user/:id', userController.updateUser);

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Deleta um usuário existente
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
routes.delete('/user/:id', userController.deleteUser);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza login de um usuário
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               username: exampleUser
 *               password: examplePassword
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       401:
 *         description: Credenciais inválidas
 */
routes.post('/login', userController.login);

/**
 * @swagger
 * /avisos:
 *   get:
 *     summary: Retorna a lista de todos os avisos
 *     tags: [Avisos]
 *     responses:
 *       200:
 *         description: A lista de avisos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Aviso'
 */
routes.get('/avisos', avisosController.getAllAvisos);

/**
 * @swagger
 * /avisos/{id}:
 *   get:
 *     summary: Retorna um único aviso pelo ID
 *     tags: [Avisos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do aviso
 *     responses:
 *       200:
 *         description: Aviso retornado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Aviso'
 *       404:
 *         description: Aviso não encontrado
 */
routes.get('/avisos/:id', avisosController.getAvisos);

/**
 * @swagger
 * /avisos:
 *   post:
 *     summary: Cria um novo aviso
 *     tags: [Avisos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Aviso'
 *     responses:
 *       201:
 *         description: Aviso criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Aviso'
 *       400:
 *         description: Campos faltantes
 */
routes.post('/avisos', avisosController.createAviso);

/**
 * @swagger
 * /avisos/{id}:
 *   put:
 *     summary: Atualiza um aviso existente
 *     tags: [Avisos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do aviso
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Aviso'
 *     responses:
 *       200:
 *         description: Aviso atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Aviso'
 *       404:
 *         description: Aviso não encontrado
 */
routes.put('/avisos/:id', avisosController.updateAviso);

/**
 * @swagger
 * /avisos/{id}:
 *   delete:
 *     summary: Deleta um aviso existente
 *     tags: [Avisos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do aviso
 *     responses:
 *       200:
 *         description: Aviso deletado com sucesso
 *       404:
 *         description: Aviso não encontrado
 */
routes.delete('/avisos/:id', avisosController.deleteAviso);

/**
 * @swagger
 * /servicos:
 *   get:
 *     summary: Retorna a lista de todos os serviços
 *     tags: [Servicos]
 *     responses:
 *       200:
 *         description: A lista de serviços.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Servico'
 */
routes.get('/servicos', servicosController.getAllServicos);

/**
 * @swagger
 * /servicos/{id}:
 *   get:
 *     summary: Retorna um único serviço pelo ID
 *     tags: [Servicos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do serviço
 *     responses:
 *       200:
 *         description: Serviço retornado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Servico'
 *       404:
 *         description: Serviço não encontrado
 */
routes.get('/servicos/:id', servicosController.getServico);

/**
 * @swagger
 * /servicos:
 *   post:
 *     summary: Cria um novo serviço
 *     tags: [Servicos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Servico'
 *     responses:
 *       201:
 *         description: Serviço criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Servico'
 *       400:
 *         description: Campos faltantes
 */
routes.post('/servicos', servicosController.createServico);

/**
 * @swagger
 * /servicos/{id}:
 *   put:
 *     summary: Atualiza um serviço existente
 *     tags: [Servicos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do serviço
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Servico'
 *     responses:
 *       200:
 *         description: Serviço atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Servico'
 *       404:
 *         description: Serviço não encontrado
 */
routes.put('/servicos/:id', servicosController.updateServico);

/**
 * @swagger
 * /servicos/{id}:
 *   delete:
 *     summary: Deleta um serviço existente
 *     tags: [Servicos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do serviço
 *     responses:
 *       200:
 *         description: Serviço deletado com sucesso
 *       404:
 *         description: Serviço não encontrado
 */
routes.delete('/servicos/:id', servicosController.deleteServico);

/**
 * @swagger
 * /sistemas:
 *   get:
 *     summary: Retorna a lista de todos os sistemas
 *     tags: [Sistemas]
 *     responses:
 *       200:
 *         description: A lista de sistemas.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Sistema'
 */
routes.get('/sistemas', sistemasController.getAllSistemas);

/**
 * @swagger
 * /sistemas/{id}:
 *   get:
 *     summary: Retorna um único sistema pelo ID
 *     tags: [Sistemas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do sistema
 *     responses:
 *       200:
 *         description: Sistema retornado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sistema'
 *       404:
 *         description: Sistema não encontrado
 */
routes.get('/sistemas/:id', sistemasController.getSistema);

/**
 * @swagger
 * /sistemas:
 *   post:
 *     summary: Cria um novo sistema
 *     tags: [Sistemas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sistema'
 *     responses:
 *       201:
 *         description: Sistema criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sistema'
 *       400:
 *         description: Campos faltantes
 */
routes.post('/sistemas', sistemasController.createSistema);

/**
 * @swagger
 * /sistemas/{id}:
 *   put:
 *     summary: Atualiza um sistema existente
 *     tags: [Sistemas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do sistema
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sistema'
 *     responses:
 *       200:
 *         description: Sistema atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sistema'
 *       404:
 *         description: Sistema não encontrado
 */
routes.put('/sistemas/:id', sistemasController.updateSistema);

/**
 * @swagger
 * /sistemas/{id}:
 *   delete:
 *     summary: Deleta um sistema existente
 *     tags: [Sistemas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do sistema
 *     responses:
 *       200:
 *         description: Sistema deletado com sucesso
 *       404:
 *         description: Sistema não encontrado
 */
routes.delete('/sistemas/:id', sistemasController.deleteSistema);

/**
 * @swagger
 * /contato:
 *   get:
 *     summary: Retorna a lista de todos os contatos
 *     tags: [Contato]
 *     responses:
 *       200:
 *         description: A lista de contatos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contato'
 */
routes.get('/contato', contatoController.getAllContatos);

/**
 * @swagger
 * /contato/{id}:
 *   get:
 *     summary: Retorna um único contato pelo ID
 *     tags: [Contato]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do contato
 *     responses:
 *       200:
 *         description: Contato retornado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contato'
 *       404:
 *         description: Contato não encontrado
 */
routes.get('/contato/:id', contatoController.getContato);

/**
 * @swagger
 * /contato:
 *   post:
 *     summary: Cria um novo contato
 *     tags: [Contato]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contato'
 *     responses:
 *       201:
 *         description: Contato criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contato'
 *       400:
 *         description: Campos faltantes
 */
routes.post('/contato', contatoController.createContato);

/**
 * @swagger
 * /contato/{id}:
 *   put:
 *     summary: Atualiza um contato existente
 *     tags: [Contato]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do contato
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contato'
 *     responses:
 *       200:
 *         description: Contato atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contato'
 *       404:
 *         description: Contato não encontrado
 */
routes.put('/contato/:id', contatoController.updateContato);

/**
 * @swagger
 * /contato/{id}:
 *   delete:
 *     summary: Deleta um contato existente
 *     tags: [Contato]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do contato
 *     responses:
 *       200:
 *         description: Contato deletado com sucesso
 *       404:
 *         description: Contato não encontrado
 */
routes.delete('/contato/:id', contatoController.deleteContato);

/**
 * @swagger
 * /acesso:
 *   get:
 *     summary: Retorna a lista de todos os acessos
 *     tags: [Acesso]
 *     responses:
 *       200:
 *         description: A lista de acessos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Acesso'
 */
routes.get('/acesso', acessoController.getAllAcessos);

/**
 * @swagger
 * /acesso/{id}:
 *   get:
 *     summary: Retorna um único acesso pelo ID
 *     tags: [Acesso]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do acesso
 *     responses:
 *       200:
 *         description: Acesso retornado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Acesso'
 *       404:
 *         description: Acesso não encontrado
 */
routes.get('/acesso/:id', acessoController.getAcesso);

/**
 * @swagger
 * /acesso:
 *   post:
 *     summary: Cria um novo acesso
 *     tags: [Acesso]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Acesso'
 *     responses:
 *       201:
 *         description: Acesso criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Acesso'
 *       400:
 *         description: Campos faltantes
 */
routes.post('/acesso', acessoController.createAcesso);

/**
 * @swagger
 * /acesso/{id}:
 *   put:
 *     summary: Atualiza um acesso existente
 *     tags: [Acesso]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do acesso
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Acesso'
 *     responses:
 *       200:
 *         description: Acesso atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Acesso'
 *       404:
 *         description: Acesso não encontrado
 */
routes.put('/acesso/:id', acessoController.updateAcesso);

/**
 * @swagger
 * /acesso/{id}:
 *   delete:
 *     summary: Deleta um acesso existente
 *     tags: [Acesso]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do acesso
 *     responses:
 *       200:
 *         description: Acesso deletado com sucesso
 *       404:
 *         description: Acesso não encontrado
 */
routes.delete('/acesso/:id', acessoController.deleteAcesso);

// Rota protegida com autenticação
routes.get('/admin', authMiddleware, userController.adminProtectedRoute);

module.exports = routes;
