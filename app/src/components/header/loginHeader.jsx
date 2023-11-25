import React from "react";
import Image from "next/image";
import Link from "next/link";

//Icons
import logoGov from "@icons/logoGov.svg";
import userAcesso from "@icons/userAcesso.svg";
import iconSair from "@icons/iconSair.svg";

export default function LoginHeader() {
    return (
        <div className="bg-azulPrincipal pb-2 w-full">
            <div className="flex content-center items-center justify-between pt-8">
                <div className="ml-12">
                    <Image src={logoGov} alt="logo" width={87} height={36} />
                </div>
                <div className="flex mr-24">
                    <p className="mr-3 text-white">Sair</p>
                    <Link href="../">
                        <Image src={iconSair} alt="logo" width={25} height={30} />
                    </Link>
                </div>
            </div>
            <div className="flex">
                <div className="flex content-center items-center pt-3 ml-12">
                    <Image src={userAcesso} alt="logo" width={30} height={30} />
                    <h1 className="text-white text-destaque1 ml-2">Acesso ao Sistema</h1>
                </div>

            </div>
        </div>
    );
}      