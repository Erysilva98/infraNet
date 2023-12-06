"use client";
import React, { useState, useEffect } from "react";
import { getUser } from "@/api/api";

import Footer from "@/components/footer/footer";
import SistemaHeader from "@/components/header/sistemaHeader";
import UsuarioList from "@/components/listaUser/usuariosLista";

export default function Administrador() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const dadosUsuarios = await getUser();

                const dadosTratados = dadosUsuarios.map((item) => {
                    return {
                        id: item.id,
                        username: item.username,
                        data_nascimento: item.data_nascimento,
                        email: item.email,
                        telefone: item.telefone,
                        ramal: item.ramal,
                    };
                });
                setUsuarios(dadosTratados || []);
            } catch (error) {
                console.log('Error ao Obter os dados em Administrador.jsx', error);
                setUsuarios([]);
            }
        };
        fetchUsuarios();
    }, []);

    const deletarUsuario = (id) => {
        const novosUsuarios = usuarios.filter((usuario) => usuario.id !== id);
        setUsuarios(novosUsuarios);
    }

    return (
        <div class="flex flex-col min-h-screen min-w-full">
            <header>
                <SistemaHeader />
            </header>

            <main class="flex-grow min-h-full">
                <section class="flex justify-center">
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
                {/* Componentes admFooter */}
                <Footer />
            </footer>
        </div>
    );
}