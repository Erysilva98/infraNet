import axios from 'axios';

// Configuração do endpoint base do servidor local
const localhost = 'http://localhost:8080/api';

// Função para buscar todos os dados
export const getAllData = async () => {
    try {
        const response = await axios.get(`${localhost}/apiDados`);
        if (response.data) {
            return response.data;
        }
        return null; // Retorna nulo se não houver dados
    }
    catch (error) {
        console.error("Erro ao Obter os Dados: ", error);
        return null;
    }
};

// Função para buscar dados dos usuários
export const getUser = async () => {
    try {
        const response = await axios.get(`${localhost}/user`);
        if (response.data && response.data.result) {
            return response.data.result.map(usuario => ({
                id: usuario.id,
                username: usuario.username,
                data_nascimento: usuario.data_nascimento,
                email: usuario.email,
                telefone: usuario.telefone,
                ramal: usuario.ramal,
            }));
        }
        return []; // Retorna array vazio se não houver dados
    } catch (error) {
        console.error("Erro ao Obter os Dados: ", error);
        return null;
    }
};

// Função para buscar todos os avisos
export const getAvisos = async () => {
    try {
        const response = await axios.get(`${localhost}/avisos`);
        if (response.data && response.data.result) {
            return response.data.result.map(aviso => ({
                id: aviso.id,
                img_path: aviso.img_path,
                prioridade: aviso.prioridade,
                data_publicacao: aviso.data_publicacao,
                link: aviso.link,
                titulo: aviso.titulo,
                subtitulo: aviso.subtitulo,
                descricao: aviso.descricao,
            }));
        }
        return []; // Retorna array vazio se não houver dados
    } catch (error) {
        console.error("Erro ao Obter os Dados: ", error);
        return null;
    }
};

// Função para buscar um aviso por ID
export const getAvisosId = async (id) => {
    try {
        const response = await axios.get(`${localhost}/avisos/${id}`);
        if (response.data && response.data.result) {
            return response.data.result;
        }
        return null; // Retorna nulo se o aviso não for encontrado
    } catch (error) {
        console.error("Erro ao Obter os Dados: ", error);
        return null;
    }
};

// Função para buscar todos os serviços
export const getServicos = async () => {
    try {
        const response = await axios.get(`${localhost}/servicos`);
        if (response.data && response.data.result) {
            return response.data.result.map(servico => ({
                id: servico.id,
                img_path: servico.img_path,
                titulo: servico.titulo,
                link: servico.link,
                descricao: servico.descricao,
            }));
        }
        return []; // Retorna array vazio se não houver dados
    } catch (error) {
        console.error("Erro ao Obter os Dados: ", error);
        return null;
    }
};

// Função para buscar todos os sistemas
export const getSistemas = async () => {
    try {
        const response = await axios.get(`${localhost}/sistemas`);
        if (response.data && response.data.result) {
            return response.data.result.map(sistema => ({
                id: sistema.id,
                img_path: sistema.img_path,
                titulo: sistema.titulo,
                link: sistema.link,
                descricao: sistema.descricao,
            }));
        }
        return []; // Retorna array vazio se não houver dados
    } catch (error) {
        console.error("Erro ao Obter os Dados: ", error);
        return null;
    }
};
