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
                <div className="flex flex-col ml-12">
                    <Image src={logoNav} alt="logo" width={87} height={36} />
                    <div className="flex ml-2 pt-2">
                        <Image src={userAcesso} alt="logo" width={20} height={20} />
                        <h1 className="text-white text-destaque1 ml-2">Acesso ao Sistema</h1>
                    </div>
                </div>
                <div className="flex mr-24">
                    <p className="mr-3 text-white">Voltar</p>
                    <Link href="../">
                        <Image src={iconSair} alt="logo" width={20} height={20} />
                    </Link>
                </div>
            </div>
        </div>
    );
}      