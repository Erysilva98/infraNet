import React from "react";
import Image from "next/image";

// icons
import logoNav from "@assets/logoNav.svg";

export default function Footer() {

    return (
        <div className="bg-azulPrincipal">
            <div className="flex flex-col ml-12 p-4">
                <div className="flex">
                    <Image src={logoNav} alt="logo" width={87} height={36} />
                    <h1 className="text-white text-destaque1 ml-2">Campus Belo Jardim</h1>
                </div>
                <div className="text-white">
                    <p>Ministério da Educação</p>
                </div>
            </div>
        </div>
    );
}