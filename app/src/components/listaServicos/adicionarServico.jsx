import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdicionarServico = ({ onAdicionarServico }) => {
    const [novoServico, setNovoServico] = useState({
        img_path: null,
        titulo: '',
        descricao: '',
        link: '',
    });

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setNovoServico((prevServico) => ({ ...prevServico, data_criacao: today }));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNovoServico((prevServico) => ({ ...prevServico, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNovoServico((prevServico) => ({ ...prevServico, img_path: file }));  
        }
    };

    const adicionarItem = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('img_path', novoServico.img_path);   // Verifique se o nome do campo corresponde ao esperado no servidor
        formData.append('titulo', novoServico.titulo);
        formData.append('descricao', novoServico.descricao);
        formData.append('link', novoServico.link);

        try {
            const response = await axios.post('http://localhost:4000/servicos', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 201) {
                const novoServicoAdicionado = {
                    id: response.data.result.id,  // Corrigido para acessar o objeto dentro do resultado
                    img_path: `data:image/png;base64,${response.data.result.img_path}`,  // Verificar se o campo img_path está correto no retorno
                    titulo: response.data.result.titulo,
                    descricao: response.data.result.descricao,
                    link: response.data.result.link,
                };
                onAdicionarServico(novoServicoAdicionado);
                console.log('Serviço adicionado com sucesso!');
            } else {
                console.error('Erro ao adicionar serviço:', response.statusText);
            }

            setNovoServico({
                img_data: null,
                titulo: '',
                descricao: '',
                link: '',
            });
        } catch (error) {
            console.error('Erro ao adicionar serviço:', error.response?.data || error.message);
        }
    };

    return (
        <form className="flex flex-col items-center" onSubmit={adicionarItem}>
            <label className="text-destaque1 text-xl font-bold mt-5">Imagem</label>
            <input
                className="border-2 border-azulPrincipal rounded-lg p-2 w-80"
                type="file"
                name="img_path"  
                onChange={handleFileChange}
            />

            <label className="text-destaque1 text-xl font-bold mt-5">Título</label>
            <input
                className="border-2 border-azulPrincipal rounded-lg p-2 w-80"
                type="text"
                name="titulo"
                value={novoServico.titulo}
                onChange={handleChange}
                placeholder="Digite o título"
            />

            <label className="text-destaque1 text-xl font-bold mt-5">Link</label>
            <input
                className="border-2 border-azulPrincipal rounded-lg p-2 w-80"
                type="text"
                name="link"
                value={novoServico.link}
                onChange={handleChange}
                placeholder="Digite o link"
            />

            <label className="text-destaque1 text-xl font-bold mt-5">Descrição</label>
            <textarea
                className="border-2 border-azulPrincipal rounded-lg p-2 w-80"
                name="descricao"
                value={novoServico.descricao}
                onChange={handleChange}
                placeholder="Digite a descrição"
            ></textarea>

            <button
                className="bg-botao hover:bg-sucesso hover:text-white text-white font-bold rounded-lg p-2 w-80 mt-5"
                type="submit"
            >
                Adicionar Serviço
            </button>
        </form>
    );
};

export default AdicionarServico;
