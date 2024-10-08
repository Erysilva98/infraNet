"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";  // Hook para redirecionamento

import navMegaphone from "@icons/navMegaphone.svg";
import navGrupo from "@icons/navGrupo.svg";
import navGoverno from "@icons/navGoverno.svg";

import AdmHeader from "@/components/header/admHeader";
import Footer from "@/components/footer/footer";
import RouteGuard from "@/components/RouteGuard/RouteGuard"; // Corrigido o caminho

const cards = [
    {
        image: navMegaphone,
        title: "Lista Avisos",
        link: "./admAvisos",
    },
    {
        image: navGrupo,
        title: "Lista Serviços",
        link: "./admServicos",
    },
    {
        image: navGoverno,
        title: "Lista Sistemas",
        link: "./admSistemas",
    },
];

function AdmHome() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login");
        }
    }, [router]);

    return (
        <div className="flex flex-col min-h-screen min-w-full">
            <header>
                <AdmHeader />
            </header>

            <main className="flex-grow min-h-full">
                <div className="flex">
                    <aside className="bg-corCard w-1/4 p-4">
                        <h1 className="flex justify-center bg-cinzaClaro text-azulPrincipal font-semibold transition duration-300 cursor-pointer rounded-full p-2">
                            GERENCIAMENTO DO SISTEMA
                        </h1>
                        <nav>
                            <ul className="p-4">
                                <li className="bg-botao hover:bg-botaoHover hover:text-white text-white font-bold transition duration-300 cursor-pointer rounded-full m-2">
                                    <Link className="flex justify-center" href="./admCadastrar">Cadastrar</Link>
                                </li>
                                <li className="bg-botao hover:bg-botaoHover hover:text-white text-white font-bold transition duration-300 cursor-pointer rounded-full m-2">
                                    <Link className="flex justify-center" href="./administrador">Lista</Link>
                                </li>
                            </ul>
                        </nav>
                    </aside>

                    <section className="flex flex-col h-full w-full pt-2">
                        <div className="flex flex-row justify-center">
                            {cards.map((card, index) => (
                                <div key={index} className="flex w-1/3 m-5 justify-center">
                                    <div className="flex flex-col">
                                        <Link href={card.link}>
                                            <Image
                                                src={card.image}
                                                alt={card.title}
                                                width="200"
                                                height="200"
                                            />
                                        </Link>
                                        <h3 className="text-center font-bold">{card.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

// Aplicando o RouteGuard para proteger a rota
export default RouteGuard(AdmHome);
