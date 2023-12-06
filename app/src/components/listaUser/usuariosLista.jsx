import React from "react";

const UserCard = ({ id, username, data_nascimento, email, telefone, ramal, onDelete }) => {
    const dateObject = new Date(data_nascimento);
    const formattedDate = dateObject.toLocaleDateString('pt-BR');
    return (
        <div className="max-w-6xl mt-2 mb-4 bg-corCard rounded-lg shadow-lg items-center">
            <div className="flex flex-col justify-center">
                <div>
                    <p className="text-xl font-bold mt-2">
                        <span className="text-gray-500 mr-2">ID:</span> {id}
                    </p>
                    <p className="text-xl font-bold mt-2">
                        <span className="text-gray-500 mr-2">Nome:</span> {username}
                    </p>
                    <p className="text-xl font-bold mt-2">
                        <span className="text-gray-500 mr-2">Data de Nascimento:</span> {formattedDate}
                    </p>
                    <p className="text-xl font-bold mt-2">
                        <span className="text-gray-500 mr-2">Email:</span> {email}
                    </p>
                    <p className="text-xl font-bold mt-2">
                        <span className="text-gray-500 mr-2">Telefone:</span> {telefone}
                    </p>
                    <p className="text-xl font-bold mt-2">
                        <span className="text-gray-500 mr-2">Ramal:</span> {ramal}
                    </p>
                </div>
                <button
                    className="bg-red-500 text-white rounded-lg p-2"
                    onClick={() => onDelete(id)}
                >
                    Deletar
                </button>
            </div>
        </div>
    );
};


const UsuarioList = ({ usuarios, onDelete }) => {
    return (
        <div className='grid grid-cols-4 gap-4 justify-normal p-5'>
            {usuarios.map((usuario) => (
                <UserCard   
                    key={usuario.id}
                    id={usuario.id}
                    username={usuario.username}
                    data_nascimento={usuario.data_nascimento}
                    email={usuario.email}
                    telefone={usuario.telefone}
                    ramal={usuario.ramal}                
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default UsuarioList;