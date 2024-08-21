"use client";
import React, { useState, useEffect } from "react";
import { getUser, deleteUser } from "@/api/api";  // Importa a função deleteUser

import Footer from "@/components/footer/footer";
import SistemaHeader from "@/components/header/sistemaHeader";
import UsuarioList from "@/components/listaUser/usuariosLista";

export default function Administrador() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const dadosUsuarios = await getUser();

                const dadosTratados = dadosUsuarios.map((item) => ({
                    id: item.id,
                    username: item.username,
                    data_nascimento: item.data_nascimento,
                }));
                setUsuarios(dadosTratados || []);
            } catch (error) {
                console.log('Error ao Obter os dados em Administrador.jsx', error);
                setUsuarios([]);
            }
        };
        fetchUsuarios();
    }, []);

    const deletarUsuario = async (id) => {
        try {
            const result = await deleteUser(id);
            if (result) {
                // Atualiza o estado local removendo o usuário deletado
                const novosUsuarios = usuarios.filter((usuario) => usuario.id !== id);
                setUsuarios(novosUsuarios);
            } else {
                console.error('Erro ao deletar o usuário');
            }
        } catch (error) {
            console.error('Erro ao executar a exclusão:', error);
        }
    };

    return (
        <div className="flex flex-col min-h-screen min-w-full">
            <header>
                <SistemaHeader />
            </header>

            <main className="flex-grow min-h-full">
                <section className="flex justify-center">
                    <div>
                        <div className="flex justify-center">
                            <h1 className="text-4xl font-bold mt-5">Administradores</h1>
                        </div>
                        <div className="flex justify-center">
                            <UsuarioList usuarios={usuarios} onDelete={deletarUsuario} />
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}
