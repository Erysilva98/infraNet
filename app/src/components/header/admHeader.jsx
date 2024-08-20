import React from "react";
import Link from "next/link";
import Image from "next/image";

import logoNav from "@assets/logoNav.svg"
import userAdm from "@icons/userAdm.svg";
import iconSair from "@icons/iconSair.svg";

export default function AdmHeader() {
    return (
        <div className="bg-azulPrincipal w-full">
            <div className="flex content-center items-center justify-between h-20">
                <div className="flex items-center justify-start ml-12 space-x-4 p-4">
                    <div>
                        <Image src={logoNav} alt="logo" width={220} height={50} />
                    </div>
                    <div className="flex">
                        <Image src={userAdm} alt="logo" width={20} height={20} />
                        <h1 className="text-white text-destaque1 ml-2">Administração do Sistema</h1>
                    </div>
                </div>
                <div className="mr-14">
                    <Link href="/">
                        <div className="flex items-center justify-center rounded-lg bg-corButton cursor-pointer hover:bg-corButtonHover transition-colors">
                            <div className="flex items-center justify-center w-24 h-9 border border-gray-300 rounded-lg bg-white">
                                <p className="text-alternativa1 mr-2">Voltar</p>
                                <Image src={iconSair} alt="logo" width={20} height={20} objectFit="contain" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}