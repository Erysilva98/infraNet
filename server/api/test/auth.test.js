const request = require('supertest');
const app = require('../../server'); 
const bcrypt = require('bcrypt');
const db = require('../data/db');

// Setup inicial antes dos testes
beforeAll(async () => {
    // Limpar a tabela de acesso e adicionar um usuário de teste
    await new Promise((resolve, reject) => {
        db.query('DELETE FROM acesso', (err) => {
            if (err) return reject(err);
            resolve();
        });
    });

    const hashedPassword = await bcrypt.hash('111', 10);

    await new Promise((resolve, reject) => {
        db.query('INSERT INTO acesso (matricula, senha) VALUES (?, ?)', ['EWBJ-2021', hashedPassword], (err) => {
            if (err) return reject(err);
            resolve();
        });
    });
});

// Limpeza após os testes
afterAll(async () => {
    await new Promise((resolve, reject) => {
        db.query('DELETE FROM acesso', (err) => {
            if (err) return reject(err);
            resolve();
        });
    });
    db.end();
});

describe('POST /api/auth/login', () => {
    it('Deve autenticar com credenciais válidas', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({
                matricula: 'EWBJ-2021',
                senha: '111'
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message', 'Autenticação bem-sucedida');
    });

    it('Deve falhar com credenciais inválidas', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({
                matricula: 'EWBJ-2021',
                senha: 'senha_incorreta'
            });
        expect(response.statusCode).toBe(401);
        expect(response.body).toHaveProperty('error', 'Credenciais inválidas');
    });

    it('Deve falhar com usuário inexistente', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({
                matricula: 'nonexistent',
                senha: 'password123'
            });
        expect(response.statusCode).toBe(401);
        expect(response.body).toHaveProperty('error', 'Credenciais inválidas');
    });
});

