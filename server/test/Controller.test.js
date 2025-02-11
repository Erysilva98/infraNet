// Controller.test.js
const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('../app'); // ajuste o caminho conforme sua estrutura
const sequelize = require('../api/data/db');

// Modelos utilizados nos testes
const Acesso = require('../api/models/acessoModel');
const Avisos = require('../api/models/avisosModel');
const Servicos = require('../api/models/servicosModel');
const Contato = require('../api/models/contatoModel');

require('dotenv').config({ path: '.env' });

process.env.JWT_SECRET = 'supersecretkeyfortest1234567890!@#';
const token = jwt.sign({ id: 1, username: 'erimilson' }, process.env.JWT_SECRET);

beforeAll(async () => {
    // Reseta o banco de dados antes de iniciar os testes
    await sequelize.sync({ force: true });
});


afterAll(async () => {
    try {
        await sequelize.close();
    } catch (error) {
        if (error.message.includes("Database is closed")) {
            // Ignora o erro pois a conexão já foi fechada
        } else {
            console.error('Erro ao fechar conexão com o banco:', error.message);
        }
    }
});


/* -----------
   CT001 – Cadastro de Acesso
   Verifica se o endpoint POST /acesso cadastra um novo acesso.
----------- */
describe('Cadastro de Acesso (CT001)', () => {
    it('deve cadastrar um novo acesso com dados válidos', async () => {
        const novoAcesso = {
            user_id: 1,
            cod_acesso: "ABC123",
            matricula: "123456789",
            senha: "senha123"
        };

        const res = await request(app)
            .post('/acesso')
            .set('Authorization', `Bearer ${token}`)
            .send(novoAcesso);

        expect(res.statusCode).toBe(201);
        expect(res.body.result).toHaveProperty('id');
        expect(res.body.result.cod_acesso).toBe(novoAcesso.cod_acesso);
    });

    it('deve retornar erro ao tentar cadastrar com dados faltantes', async () => {
        // Exemplo: omitindo o campo "matricula"
        const novoAcessoIncompleto = {
            user_id: 1,
            cod_acesso: "ABC123",
            // matricula ausente
            senha: "senha123"
        };

        const res = await request(app)
            .post('/acesso')
            .set('Authorization', `Bearer ${token}`)
            .send(novoAcessoIncompleto);

        // Como o controller não valida explicitamente os campos, o erro ocorrerá no Sequelize
        // e retornará status 500 com a mensagem "Erro ao criar acesso."
        expect(res.statusCode).toBe(500);
        expect(res.body.error).toMatch(/Erro ao criar acesso/);
    });
});

/* -----------
   Testes para Avisos – Listagem e Detalhamento
   Esses testes cobrem:
     - Banco de dados com avisos (CTF003 – Listagem de Avisos)
     - Banco de dados vazio (lista vazia)
     - Detalhamento de aviso (CTF004)
----------- */
describe('Listagem de Avisos (CTF003)', () => {
    beforeEach(async () => {
        // Garante que a tabela esteja limpa antes de cada teste
        await Avisos.destroy({ where: {} });
    });

    it('deve retornar lista de avisos quando houver avisos cadastrados', async () => {
        // Cria um aviso de exemplo
        await Avisos.create({
            titulo: "Aviso Teste",
            descricao: "Descrição do aviso teste",
            prioridade: 1,
            data_publicacao: new Date()
        });

        const res = await request(app).get('/avisos');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body.result)).toBe(true);
        expect(res.body.result.length).toBe(1);
    });

    it('deve retornar lista vazia quando não houver avisos cadastrados', async () => {
        const res = await request(app).get('/avisos');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body.result)).toBe(true);
        expect(res.body.result.length).toBe(0);
    });
});

describe('Detalhamento de Aviso (CTF004)', () => {
    let avisoIdComImagem, avisoIdSemImagem;

    beforeAll(async () => {
        // Limpa os avisos e cria dois registros:
        // um com imagem e outro sem imagem
        await Avisos.destroy({ where: {} });
        const avisoComImagem = await Avisos.create({
            titulo: "Aviso com Imagem",
            descricao: "Aviso com imagem",
            prioridade: 1,
            data_publicacao: new Date(),
            img_data: Buffer.from('dados da imagem').toString('base64')
        });
        const avisoSemImagem = await Avisos.create({
            titulo: "Aviso sem Imagem",
            descricao: "Aviso sem imagem",
            prioridade: 1,
            data_publicacao: new Date(),
            img_data: null
        });
        avisoIdComImagem = avisoComImagem.id;
        avisoIdSemImagem = avisoSemImagem.id;
    });

    it('deve retornar os detalhes do aviso com imagem', async () => {
        const res = await request(app).get(`/avisos/${avisoIdComImagem}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toHaveProperty('id', avisoIdComImagem);
        expect(res.body.result.img_data).toBeTruthy();
    });

    it('deve retornar os detalhes do aviso sem imagem', async () => {
        const res = await request(app).get(`/avisos/${avisoIdSemImagem}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toHaveProperty('id', avisoIdSemImagem);
        // Aqui, como o campo pode ser null, verificamos se é nulo ou uma string vazia
        expect(res.body.result.img_data === null || res.body.result.img_data === '').toBe(true);
    });

    it('deve retornar 404 se o aviso não for encontrado', async () => {
        const res = await request(app).get('/avisos/9999');
        expect(res.statusCode).toBe(404);
        expect(res.body.error).toMatch(/Aviso não encontrado/);
    });
});

/* -----------
   CT003 – Cadastro de Serviço com Imagem (e também CTF005 – Formulário de Serviço)
   Testa o endpoint POST /servicos para cadastro de serviço com imagem.
----------- */
describe('Cadastro de Serviço com Imagem (CT003 / CTF005)', () => {
    it('deve cadastrar um novo serviço com imagem válida e dados completos', async () => {
        // Simula um arquivo de imagem usando Buffer (pode ser qualquer dado binário)
        const imageBuffer = Buffer.from('fake image data');
        const servicoData = {
            titulo: "Serviço Teste",
            link: "http://example.com",
            descricao: "Descrição do serviço teste"
        };

        const res = await request(app)
            .post('/servicos')
            .set('Authorization', `Bearer ${token}`)
            // Utiliza o método field para os campos de texto
            .field('titulo', servicoData.titulo)
            .field('link', servicoData.link)
            .field('descricao', servicoData.descricao)
            // Anexa o arquivo simulando o campo de imagem (nome do campo: img_path)
            .attach('img_path', imageBuffer, 'teste.png');

        expect(res.statusCode).toBe(201);
        expect(res.body.result).toHaveProperty('id');
        expect(res.body.result.titulo).toBe(servicoData.titulo);
    });

    it('deve retornar erro ao tentar cadastrar serviço sem imagem', async () => {
        const servicoData = {
            titulo: "Serviço Teste",
            link: "http://example.com",
            descricao: "Descrição do serviço teste"
        };

        const res = await request(app)
            .post('/servicos')
            .set('Authorization', `Bearer ${token}`)
            .field('titulo', servicoData.titulo)
            .field('link', servicoData.link)
            .field('descricao', servicoData.descricao);
        // Não anexa o arquivo de imagem

        // Como o controller tenta acessar req.file.buffer, ocorrerá erro e retornará status 500
        expect(res.statusCode).toBe(500);
        expect(res.body.error).toMatch(/Erro ao criar serviço/);
    });
});

/* -----------
   CTF006 – Exibição de Contatos
   Testa o endpoint GET /contato para listar contatos.
----------- */
describe('Exibição de Contatos (CTF006)', () => {
    beforeEach(async () => {
        // Limpa a tabela de contatos antes de cada teste
        await Contato.destroy({ where: {} });
    });

    it('deve retornar a lista de contatos quando houver registros', async () => {
        // Cria um contato de exemplo
        await Contato.create({
            user_id: 1,
            email: "test@example.com",
            telefone: "123456789",
            ramal: "101"
        });

        const res = await request(app).get('/contato');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body.result)).toBe(true);
        expect(res.body.result.length).toBe(1);
    });

    it('deve retornar lista vazia quando não houver contatos cadastrados', async () => {
        const res = await request(app).get('/contato');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body.result)).toBe(true);
        expect(res.body.result.length).toBe(0);
    });
});
