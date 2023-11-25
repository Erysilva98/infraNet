import React from "react";
import Image from "next/image";

// icons
import logoGov from "@icons/logoGov.svg";

export default function Footer() {

    return (
        <div className="bg-azulPrincipal">
            <div className="text-white ml-20 mr-20 mb-5">
                <div>
                    <Image src={logoGov} alt="logo" width={87} height={36} />
                </div>
                <h1>InfraNet - Campus Belo Jardim</h1>
                <p>Ministério da Educação</p>
            </div>
        </div>
    );
}