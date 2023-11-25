import React from "react";
import Link from "next/link";
import Image from "next/image";

import navMegaphone from "@icons/navMegaphone.svg";
import navGrupo from "@icons/navGrupo.svg";
import navGoverno from "@icons/navGoverno.svg";

import AdmHeader from "@/components/header/admHeader";
import Footer from "@/components/footer/footer";


const cards = [
    {
        image: navMegaphone,
        title: "Card Title 1",
        link: "/link1",
    },
    {
        image: navGrupo,
        title: "Card Title 2",
        link: "/link2",
    },
    {
        image: navGoverno,
        title: "Card Title 3",
        link: "/link3",
    },
];

export default function AdmHome() {
    return (
        <div className="h-full min-w-full">
            <header>
                {/* Componentes admHeader */}
                <AdmHeader />
                <nav className="w-full flex">
                    {/* Componente de Custo Total */}
                    <Link href="/distribuidora">
                        <p>Cadastrar ADM</p>
                    </Link>

                    {/* Componente de Licenças */}
                    <Link href="/licenças">
                        <p>Lista</p>
                    </Link>
                </nav>
            </header>

            <main>
                <section className="flex flex-col bg-azulCard min-w-full">
                    <div className="flex flex-row justify-center">
                        {cards.map((card) => (
                            <div className="w-1/3 m-5">
                                <div className="flex flex-col">
                                    <Link href={card.link}>
                                        <Image src={card.image} alt={card.title} width="200" height="200" />
                                    </Link>
                                    <h3 className="text-center font-bold">{card.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="min-w-full">
                {/* Componentes admFooter */}
                <Footer />
            </footer>
        </div>
    );
}
