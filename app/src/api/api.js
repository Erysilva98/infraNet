import axios from 'axios';

// Rota Geral

const localhost = 'http://localhost:8080';

// Rotas da API para o usuário

export const getUser = async () => {
    const response = await axios.get(localhost + '/api/user');
    return response.data;
};

export const getContato = async () => {
    const response = await axios.get('/api/contato');
    return response.data;
};

export const createUser = async (username, password, data_nascimento) => {
    const response = await axios.post(localhost + '/api/user', {username, password, data_nascimento});
    return response.data;
};


// Rotas da API para o contato

export const createContato = async (user_id, email, telefone, ramal) => {
    const response = await axios.post(localhost + '/api/contato', {user_id, email, telefone, ramal});
    return response.data;
};


// Rotas da API para o acesso

export const getAcesso = async () => {
    const response = await axios.get(localhost + '/api/acesso');
    return response.data;
};

// Rotas da API para os avisos
export const getAvisos = async () => {
    try {
        const response = await axios.get(localhost + '/api/avisos');

        if(response.data && response.data.result) {
            const dados = response.data.result.map( aviso => {
                return {
                    id: aviso.id,
                    img_path : aviso.img_path,
                    prioridade : aviso.prioridade,
                    data_publicacao : aviso.data_publicacao,
                    titulo : aviso.titulo,
                    subtitulo : aviso.subtitulo,
                    descricao : aviso.descricao,
                }
            });
            return dados;
        }
        return null;
    } catch (error) {
        console.log(" Error ao Obter os Dados ",error);
        return null;
    }
};

export const getAvisosImagem = async () => {
    const response = await axios.get(localhost + '/api/avisos');
    
    return response.data;
}

// Rotas da API para os serviços

export const getServicos = async () => {
    const response = await axios.get(localhost + '/api/servicos');
    return response.data;
};

// Rotas da API para os sistemas

export const getSistemas = async () => {
    const response = await axios.get(localhost + '/api/sistemas');
    return response.data;
};



