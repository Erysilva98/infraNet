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
    const response = await axios.post(localhost + '/api/user', { username, password, data_nascimento });
    return response.data;
};


// Rotas da API para o contato

export const createContato = async (user_id, email, telefone, ramal) => {
    const response = await axios.post(localhost + '/api/contato', { user_id, email, telefone, ramal });
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
        const dados = response.data.result.map(aviso => {
            return {
                id: aviso.id,
                img_path: aviso.img_path,
                prioridade: aviso.prioridade,
                data_publicacao: aviso.data_publicacao,
                link: aviso.link,
                titulo: aviso.titulo,
                subtitulo: aviso.subtitulo,
                descricao: aviso.descricao,
            };
        });

        return dados; // Adicionado o retorno dos dados
    } catch (error) {
        console.log("Error ao Obter os Dados ", error);
        return null;
    }
};

export const getAvisosId = async (id) => {
    try {
        const response = await axios.get(`${localhost}/api/avisos/${id}`);
        const aviso = response.data.result;

        return aviso;
    } catch (error) {
        console.log("Erro ao Obter os Dados ", error);
        return null;
    }
};

// Rotas da API para os serviços
export const getServicos = async () => {
    try {
        const response = await axios.get(localhost + '/api/servicos');
        const dados = response.data.result.map(servico => {
            return {
                id: servico.id,
                img_path: servico.img_path,
                titulo: servico.titulo,
                link: servico.link,
                descricao: servico.descricao,
            };
        });

        return dados; // Adicionado o retorno dos dados
    }
    catch (error) {
        console.log("Error ao Obter os Dados ", error);
        return null;
    }
};

// Rotas da API para os sistemas
export const getSistemas = async () => {
    try {
        const response = await axios.get(localhost + '/api/sistemas');
        const dados = response.data.result.map(sistema => {
            return {
                id: sistema.id,
                img_path: sistema.img_path,
                titulo: sistema.titulo,
                link: sistema.link,
                descricao: sistema.descricao,
            };
        });

        return dados; // Adicionado o retorno dos dados
    }
    catch (error) {
        console.log("Error ao Obter os Dados ", error);
        return null;
    }
};



