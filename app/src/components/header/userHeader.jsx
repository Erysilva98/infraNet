import React from "react";
import Image from "next/image";
import Link from "next/link";

//Icons
import logoGov from "@icons/logoGov.svg";
import iconLogin from "@icons/iconLogin.svg";
import iconHome from "@icons/iconHome.svg";

export default function UserHeader() {
    return (
        <div className="bg-azulPrincipal pb-2 w-full">
            <div className="flex content-center items-center justify-between pt-8">
                <div className="ml-12">
                    <Image src={logoGov} alt="logo" width={87} height={36} />
                </div>
                <div className="mr-16">
                    <Link href="/pages/login" className="flex w-20 items-center justify-center rounded-lg bg-corButton text-white">
                        <button className="flex items-center">
                            <Image src={iconLogin} alt="user" width={90} height={90} />
                        </button>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex content-center items-center pt-3 ml-12">
                    <Image src={iconHome} alt="logo" width={30} height={30} />
                    <h1 className="text-white text-destaque1 ml-2">InfraNet - Campus Belo Jardim</h1>
                </div>
                <div className="ml-20 text-white">
                    <p>Ministério da Educação</p>
                </div>
            </div>
        </div>
    );
}      