import React from "react";
import Image from "next/image";
import Link from "next/link";

//Icons
import logoNav from "@assets/logoNav.svg";
import iconLogin from "@icons/iconLogin.svg";

export default function UserHeader() {
    return (
        <div className="bg-azulPrincipal w-full">
            <div className="flex content-center items-center justify-between h-20">
                <div className="flex flex-col ml-12">
                    <div className="flex">
                        <Image src={logoNav} alt="logo" width={87} height={36} />
                        <h1 className="text-white text-destaque1 ml-2">Campus Belo Jardim</h1>
                    </div>
                    <div className="text-white">
                        <p>Ministério da Educação</p>
                    </div>
                </div>
                <div className="mr-16">
                    <Link href="/pages/login" className="flex w-20 items-center justify-center rounded-lg bg-corButton text-white">
                        <button className="flex items-center">
                            <Image src={iconLogin} alt="user" width={90} height={90} />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}      