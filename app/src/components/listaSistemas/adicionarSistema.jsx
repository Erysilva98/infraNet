import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdicionarSistema = ({ onAdicionarSistema }) => {
    const [novoSistema, setNovoSistema] = useState({
        img_path: null,  // Altere o nome aqui para img_path
        titulo: '',
        descricao: '',
        link: '',
    });

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setNovoSistema((prevSistema) => ({ ...prevSistema, data_criacao: today }));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNovoSistema((prevSistema) => ({ ...prevSistema, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNovoSistema((prevSistema) => ({ ...prevSistema, img_path: file }));  // Altere para img_path
        }
    };

    const adicionarItem = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('img_path', novoSistema.img_path);  // Altere o campo aqui para img_path
        formData.append('titulo', novoSistema.titulo);
        formData.append('descricao', novoSistema.descricao);
        formData.append('link', novoSistema.link);

        try {
            const response = await axios.post('http://localhost:4000/sistemas', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 201) {
                const novoSistemaAdicionado = {
                    id: response.data.result.id,
                    img_path: `data:image/png;base64,${response.data.result.img_path}`,
                    titulo: response.data.result.titulo,
                    descricao: response.data.result.descricao,
                    link: response.data.result.link,
                };
                onAdicionarSistema(novoSistemaAdicionado);
                console.log('Sistema adicionado com sucesso!');
            } else {
                console.error('Erro ao adicionar sistema:', response.statusText);
            }

            setNovoSistema({
                img_path: null,
                titulo: '',
                descricao: '',
                link: '',
            });
        } catch (error) {
            console.error('Erro ao adicionar sistema:', error.response?.data || error.message);
        }
    };

    return (
        <form className="flex flex-col items-center" onSubmit={adicionarItem}>
            <label className="text-destaque1 text-xl font-bold mt-5">Imagem</label>
            <input
                className="border-2 border-azulPrincipal rounded-lg p-2 w-80"
                type="file"
                name="img_path"  // Altere o nome do campo para img_path
                onChange={handleFileChange}
            />

            <label className="text-destaque1 text-xl font-bold mt-5">Título</label>
            <input
                className="border-2 border-azulPrincipal rounded-lg p-2 w-80"
                type="text"
                name="titulo"
                value={novoSistema.titulo}
                onChange={handleChange}
                placeholder="Digite o título"
            />

            <label className="text-destaque1 text-xl font-bold mt-5">Link</label>
            <input
                className="border-2 border-azulPrincipal rounded-lg p-2 w-80"
                type="text"
                name="link"
                value={novoSistema.link}
                onChange={handleChange}
                placeholder="Digite o link"
            />

            <label className="text-destaque1 text-xl font-bold mt-5">Descrição</label>
            <textarea
                className="border-2 border-azulPrincipal rounded-lg p-2 w-80"
                name="descricao"
                value={novoSistema.descricao}
                onChange={handleChange}
                placeholder="Digite a descrição"
            ></textarea>

            <button
                className="bg-botao hover:bg-sucesso hover:text-white text-white font-bold rounded-lg p-2 w-80 mt-5"
                type="submit"
            >
                Adicionar Sistema
            </button>
        </form>
    );
};

export default AdicionarSistema;
