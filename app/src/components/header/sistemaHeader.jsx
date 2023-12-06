import React from "react";
import Link from "next/link";
import Image from "next/image";

import logoNav from "@assets/logoNav.svg"
import userAdm from "@icons/userAdm.svg";
import iconSair from "@icons/iconSair.svg";

export default function SistemaHeader() {
    return (
        <div className="bg-azulPrincipal w-full">
            <div className="flex content-center items-center justify-between h-20">
                <div className="flex flex-col ml-12">
                    <Image src={logoNav} alt="logo" width={87} height={36} />
                    <div className="flex ml-2 pt-2">
                        <Image src={userAdm} alt="logo" width={20} height={20} />
                        <h1 className="text-white text-destaque1 ml-2">Administração do Sistema</h1>
                    </div>
                </div>
                <div className="flex mr-24">
                    <p className="mr-3 text-white">Voltar</p>
                    <Link href="/pages/admPage/admHome">
                        <Image src={iconSair} alt="logo" width={20} height={20} />
                    </Link>
                </div>
            </div>
        </div>
    );
}