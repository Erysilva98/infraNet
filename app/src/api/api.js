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

export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`${localhost}/user/${id}`);
        return response.data.result; // Retorna a resposta do servidor
    } catch (error) {
        console.error("Erro ao deletar o usuário:", error);
        return null;
    }
}

// Rotas da API para os avisos
export const getAvisos = async () => {
    try {
        const response = await axios.get(localhost + '/avisos');
        const dados = response.data.result.map(aviso => {
            return {
                id: aviso.id,
                img_path: `data:image/png;base64,${aviso.img_data}`,
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
        const aviso = response.data.result; // Corrigido para pegar apenas um aviso

        const dadosTratados = {
            id: aviso.id,
            img_path: `data:image/png;base64,${aviso.img_data}`,
            prioridade: aviso.prioridade,
            data_publicacao: aviso.data_publicacao,
            link: aviso.link,
            titulo: aviso.titulo,
            subtitulo: aviso.subtitulo,
            descricao: aviso.descricao,
        };

        return dadosTratados; // Retorna o aviso tratado
    } catch (error) {
        console.log("Error ao Obter os Dados ", error);
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
    try {
        const response = await axios.get(localhost + '/servicos');
        const dados = response.data.result.map(servico => {
            return {
                id: servico.id,
                img_path: `data:image/png;base64,${servico.img_path}`,
                titulo: servico.titulo,
                link: servico.link,
                descricao: servico.descricao,
            };
        }); 
        return dados; // Retornar os dados formatados
    } catch (error) {
        console.log("Erro ao obter os serviços:", error);
        return null;
    }
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
    try {
        const response = await axios.get(localhost + '/sistemas');
        const dados = response.data.result.map(sistema => {
            return {
                id: sistema.id,
                img_path: `data:image/png;base64,${sistema.img_path}`,
                titulo: sistema.titulo,
                link: sistema.link,
                descricao: sistema.descricao,
            };
        });
        return dados; // Retornar os dados formatados
    } catch (error) {
        console.log("Erro ao obter os sistemas:", error);
        return null;
    }
};


export const deleteSistema = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:4000/sistemas/${id}`);
        return response.status === 200;
    } catch (error) {
        console.error('Erro ao deletar o sistema:', error);
        return false;
    }
}

