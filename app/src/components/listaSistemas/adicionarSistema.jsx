import React, {useState} from "react";

const AdicionarSistema = ({ onAdicionarSistema }) => {
    const [novoSistema, setNovoSistema] = useState({
        img_path: "",
        titulo: "",
        link: "",
        descricao: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNovoSistema((prevSistema) => ({ ...prevSistema, [name]: value }));
    }

    const adicionarItem = () => {
        onAdicionarSistema(novoSistema);
        setNovoSistema({
            img_path: "",
            titulo: "",
            link: "",
            descricao: "",
        });
    }

    return (
        <form className="flex flex-col items-center">
            <label className="text-destaque1 text-xl font-bold mt-5">Imagem</label>
            <input
                className="border-2 border-azulPrincipal rounded-lg p-2 w-80"
                type="text"
                name="img_path"
                value={novoSistema.img_path}
                onChange={handleChange}
                placeholder="Digite o caminho da imagem"
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
                type="text"
                name="descricao"
                value={novoSistema.descricao}
                onChange={handleChange}
                placeholder="Digite a descrição"
            />

            <button
                className="bg-botao hover:bg-sucesso hover:text-white text-white font-bold rounded-lg p-2 w-80 mt-5"
                onClick={adicionarItem}
            >
                Adicionar Sistema
            </button>
        </form>
    );
}

export default AdicionarSistema;