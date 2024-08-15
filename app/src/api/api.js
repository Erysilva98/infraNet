import axios from 'axios';

// Rota Geral da API

const localhost = 'http://localhost:8080';

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
        const response = await axios.get(`${localhost}/avisos/${id}`);
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
        const response = await axios.get(localhost + '/servicos');
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
        const response = await axios.get(localhost + '/sistemas');
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



