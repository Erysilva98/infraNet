import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdicionarAviso = ({ onAdicionarAviso }) => {  // Removi o setMostrarFormulario aqui
    const [novoAviso, setNovoAviso] = useState({
        img_data: null,
        prioridade: '',
        data_criacao: '',  // Data de criação será definida como a data de hoje
        link: '',
        titulo: '',
        subtitulo: '',
        descricao: '',
    });

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setNovoAviso((prevAviso) => ({ ...prevAviso, data_criacao: today }));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNovoAviso((prevAviso) => ({ ...prevAviso, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNovoAviso((prevAviso) => ({ ...prevAviso, img_data: file }));
        }
    };

    const adicionarItem = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('img_data', novoAviso.img_data);
        formData.append('titulo', novoAviso.titulo);
        formData.append('prioridade', novoAviso.prioridade);
        formData.append('data_criacao', novoAviso.data_criacao);
        formData.append('link', novoAviso.link);
        formData.append('subtitulo', novoAviso.subtitulo);
        formData.append('descricao', novoAviso.descricao);

        try {
            const response = await axios.post('http://localhost:4000/avisos', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 201) {
                const novoAvisoAdicionado = {
                    id: response.data.result.id,
                    img_data: `data:image/png;base64,${response.data.result.img_data}`,
                    titulo: response.data.result.titulo,
                    subtitulo: response.data.result.subtitulo,
                    descricao: response.data.result.descricao,
                    prioridade: response.data.result.prioridade,
                    link: response.data.result.link,
                };
                onAdicionarAviso(novoAvisoAdicionado);

                // Aqui não fechamos o formulário nem recarregamos a página
                setNovoAviso({
                    img_data: null,
                    prioridade: '',
                    data_criacao: '',
                    link: '',
                    titulo: '',
                    subtitulo: '',
                    descricao: '',
                });
            } else {
                console.error('Erro ao adicionar aviso:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao adicionar aviso:', error);
        }
    };

    return (
        <form className="flex flex-col items-center" onSubmit={adicionarItem}>
            <label className="text-destaque1 text-xl font-bold mt-5">Imagem</label>
            <input
                className="border-2 border-azulPrincipal rounded-lg p-2 w-80"
                type="file"
                name="img_data"
                onChange={handleFileChange}
            />

            <label className="text-destaque1 text-xl font-bold mt-5">Título</label>
            <input
                className="border-2 border-azulPrincipal rounded-lg p-2 w-80"
                type="text"
                name="titulo"
                value={novoAviso.titulo}
                onChange={handleChange}
                placeholder="Digite o título"
            />

            <label className="text-destaque1 text-xl font-bold mt-5">Prioridade</label>
            <input
                className="border-2 border-azulPrincipal rounded-lg p-2 w-80"
                type="number"
                name="prioridade"
                value={novoAviso.prioridade}
                onChange={handleChange}
                placeholder="Digite a prioridade (número)"
            />

            <label className="text-destaque1 text-xl font-bold mt-5">Link</label>
            <input
                className="border-2 border-azulPrincipal rounded-lg p-2 w-80"
                type="text"
                name="link"
                value={novoAviso.link}
                onChange={handleChange}
                placeholder="Digite o link"
            />

            <label className="text-destaque1 text-xl font-bold mt-5">Subtítulo</label>
            <input
                className="border-2 border-azulPrincipal rounded-lg p-2 w-80"
                type="text"
                name="subtitulo"
                value={novoAviso.subtitulo}
                onChange={handleChange}
                placeholder="Digite o subtítulo"
            />

            <label className="text-destaque1 text-xl font-bold mt-5">Descrição</label>
            <textarea
                className="border-2 border-azulPrincipal rounded-lg p-2 w-80"
                name="descricao"
                value={novoAviso.descricao}
                onChange={handleChange}
                placeholder="Digite a descrição"
            ></textarea>

            <button
                className="bg-botao hover:bg-sucesso hover:text-white text-white font-bold rounded-lg p-2 w-80 mt-5"
                type="submit"
            >
                Adicionar Aviso
            </button>
        </form>
    );
};

export default AdicionarAviso;
