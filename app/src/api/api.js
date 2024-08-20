import axios from 'axios';

// Rota Geral da API

const localhost = 'http://localhost:4000';

// Rotas da API para o usuário
export const getUser = async () => {
    try {
        const response = await axios.get(localhost + '/user');
        const dados = response.data.result.map(usuario => {
            return {
                id: usuario.id,
                username: usuario.username,
                data_nascimento: usuario.data_nascimento,
                email: usuario.email,
                telefone: usuario.telefone,
                ramal: usuario.ramal,
            };
        });
        return dados; // Adicionado o retorno dos dados
    }
    catch (error) {
        console.log("Error ao Obter os Dados ", error);
        return null;
    }
};

// Rotas da API para os avisos
export const getAvisos = async () => {
    try {
        const response = await axios.get(localhost + '/avisos');
        const dados = response.data.result.map(aviso => {
            return {
                id: aviso.id,
                img_data: aviso.img_data,
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
        const response = await axios.get(`${localhost}/avisos/${id}`);
        const aviso = response.data.result;

        return aviso;
    } catch (error) {
        console.log("Erro ao Obter os Dados ", error);
        return null;
    }
};

export const deleteAviso = async (id) => {
    try {
        const response = await axios.delete(`${localhost}/avisos/${id}`);
        return response.data.result; // Retorna a resposta do servidor
    } catch (error) {
        console.error("Erro ao deletar o aviso:", error);
        return null;
    }
};

// Rotas da API para os serviços
export const getServicos = async () => {
    const response = await axios.get('http://localhost:4000/servicos');
    return response.data;
};

export const deleteServico = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:4000/servicos/${id}`);
        return response.status === 200;
    } catch (error) {
        console.error('Erro ao deletar o serviço:', error);
        return false;
    }
};

// Rotas da API para os sistemas
export const getSistemas = async () => {
    const response = await axios.get('http://localhost:4000/sistemas');
    return response.data;
};


