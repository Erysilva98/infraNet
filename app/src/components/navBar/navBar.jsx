import React from "react";
import Image from "next/image";

import navHome from "@icons/navHome.svg";
import navMegaphone from "@icons/navMegaphone.svg";
import navGrupo from "@icons/navGrupo.svg";
import navGoverno from "@icons/navGoverno.svg";

export default function NavBar() {
  return (
    <nav>
      <div className="flex flex-col justify-center ml-12">
        <ul className="flex">
          <li className="mr-2">
            <a href="/" className="flex items-center space-x-2">
              <Image src={navHome} alt="Icone Inicio" width={20} height={20} />
              <p>Início |</p>
            </a>
          </li>
          <li className="mr-2">
            <a href="/pages/avisos" className="flex items-center space-x-2">
              <Image src={navMegaphone} alt="Icone Aviso" width={20} height={20} />
              <p>Avisos |</p>
            </a>
          </li>
          <li className="mr-2">
            <a href="/pages/servicos" className="flex items-center space-x-2">
              <Image src={navGrupo} alt="Icone Serviços Internos" width={20} height={20} />
              <p>Serviços Internos |</p>
            </a>
          </li>
          <li>
            <a href="/pages/sistemas" className="flex items-center space-x-2">
              <Image src={navGoverno} alt="Icone istema Gorvenamentais" width={20} height={20} />
              <p>Sistemas Governamentais </p>
            </a>
          </li>
        </ul>
      </div>
      <hr className="border-t border-gray-300 mb-2"></hr>
    </nav>
  );
}
