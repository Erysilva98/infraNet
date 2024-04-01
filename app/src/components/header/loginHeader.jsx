import React from "react";
import Image from "next/image";
import Link from "next/link";

//Icons
import logoNav from "@assets/logoNav.svg";
import userAcesso from "@icons/userAcesso.svg";
import iconSair from "@icons/iconSair.svg";

export default function LoginHeader() {
    return (
        <div className="bg-azulPrincipal w-full">
            <div className="flex content-center items-center justify-between h-20">
                <div className="flex items-center justify-start ml-12 space-x-4 p-4">
                    <div>
                        <Image src={logoNav} alt="logo" width={220} height={50} />
                    </div>
                    <div className="flex">
                        <Image src={userAcesso} alt="logo" width={20} height={20} />
                        <h1 className="text-white text-destaque1 ml-2">Acesso ao Sistema</h1>
                    </div>
                </div>
                <div className="mr-14">
                    <Link href="../">
                        <p className="flex items-center justify-center rounded-lg bg-corButton cursor-pointer hover:bg-corButtonHover transition-colors">
                            <div className="flex items-center justify-center w-24 h-9 border border-gray-300 rounded-lg bg-white">
                                <p className="text-alternativa1 mr-2">Voltar</p>
                                <Image src={iconSair} alt="logo" width={20} height={20} objectFit="contain" />
                            </div>
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}      