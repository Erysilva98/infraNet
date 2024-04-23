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
                    <div className="flex items-center justify-start space-x-4 p-4">
                        <div>
                            <Image src={logoNav} alt="logo" width={220} height={50} priority />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-white">Campus Belo Jardim</h1>
                            <p className="text-white">Ministério da Educação</p>
                        </div>
                    </div>

                </div>
                <div>
                    <Link href="/pages/login" passHref>
                        <button className="flex mr-11 items-center justify-center rounded-lg bg-corButton text-white">
                            <div className="w-40 h-30" style={{ position: 'relative', width: '100px', height: '50px' }}>
                                <Image src={iconLogin} alt="user" layout="fill" />
                            </div>
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
