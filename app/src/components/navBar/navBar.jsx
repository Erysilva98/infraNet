import React from "react";
import Image from "next/image";

import navHome from "@icons/navHome.svg";
import navMegaphone from "@icons/navMegaphone.svg";
import navGrupo from "@icons/navGrupo.svg";
import navGoverno from "@icons/navGoverno.svg";

// Urls Path Pages
const urlAvisos = "/pages/avisos";
const urlServicos = "/pages/servicos";
const urlSistemas = "/pages/sistemas";

export default function NavBar() {
  return (
    <nav>
      <div className="flex flex-col justify-center ml-12">
        <ul className="flex">
          <li className="mr-2 p-1">
            <a href="/" className="flex items-center">
              <button className="flex items-center bg-navButton text-white space-x-2 py-2 px-4 rounded hover:bg-navButtonHover transition duration-300 ease-in-out focus:outline-none focus:shadow-outline">
                <Image src={navHome} alt="Icone Inicio" width={20} height={20} />
                <p>Home</p>
              </button>
            </a>
          </li>

          <li className="mr-2 p-1">
            <a href={urlAvisos} className="flex items-center">
              <button className="flex items-center bg-navButton text-white space-x-2 py-2 px-4 rounded hover:bg-navButtonHover transition duration-300 ease-in-out focus:outline-none focus:shadow-outline">
                <Image src={navMegaphone} alt="Icone Aviso" width={20} height={20} />
                <p>Avisos</p>
              </button>
            </a>
          </li>

          <li className="mr-2 p-1">
            <a href={urlServicos} className="flex items-center">
              <button className="flex items-center bg-navButton text-white space-x-2 py-2 px-4 rounded hover:bg-navButtonHover transition duration-300 ease-in-out focus:outline-none focus:shadow-outline">
                <Image src={navGrupo} alt="Icone Serviços Internos" width={20} height={20} />
                <p>Serviços Internos</p>
              </button>
            </a>
          </li>

          <li className="mr-2 p-1">
            <a href={urlSistemas} className="flex items-center">
              <button className="flex items-center bg-navButton text-white space-x-2 py-2 px-4 rounded hover:bg-navButtonHover transition duration-300 ease-in-out focus:outline-none focus:shadow-outline">
                <Image src={navGoverno} alt="Icone istema Gorvenamentais" width={20} height={20} />
                <p>Sistemas Governamentais </p>
              </button>
            </a>
          </li>
        </ul>
      </div>
      <hr className="border-t border-gray-300 mb-2"></hr>
    </nav>
  );
}