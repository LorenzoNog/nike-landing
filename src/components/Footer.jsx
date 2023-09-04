import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillInstagram } from "react-icons/ai";
import {FaTwitterSquare} from 'react-icons/fa'
import { BsFacebook } from "react-icons/bs";
import { ImYoutube2 } from "react-icons/im";

const items = [
  "Envíos y entregas",
  "Devoluciones",
  "Cambios",
  "Autogestionar mi devolucion",
  "Opciones de pago",
  "Contactate",
  "Boton de arrepentimiento",
  "Ver todos",
];
const Footer = () => {
  return (
    <footer className="pt-10 px-5 mt-10 bg-black flex flex-col">
      <div className="grid grid-cols-5 gap-5 text-white pb-20">
        <div>
          <h2 className="font-bold cursor-pointer">BUSCAR TIENDA</h2>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold mb-3">AYUDA</h2>
          <ul className="flex flex-col gap-1">
            {items.map((item) => {
              return <li className="text-gray-400 text-[12px] hover:text-white">{item}</li>;
            })}
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold mb-3">ACERCA DE NIKE</h2>
          <ul className="flex flex-col text-[12px] gap-1">
            <li className="text-gray-400 hover:text-white">Noticias</li>
            <li className="text-gray-400 hover:text-white">Inversionistas</li>
            <li className="text-gray-400 hover:text-white">Sustentabilidad</li>
          </ul>
        </div>
        <div>
          <img className="w-[115px] h-[50px]" src="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/db22a4c4-96cd-48d2-ba08-5ee9052133e6___2bdd91f33fc0a69a75e084e39192e8ea.png" />
        </div>
        <div className="flex gap-5 text-3xl text-gray-400 cursor-pointer">
          <FaTwitterSquare className="hover:text-white" />
          <BsFacebook className="hover:text-white" />
          <ImYoutube2 className="hover:text-white" />
          <AiFillInstagram className="hover:text-white" />
        </div>
      </div>
      <div className="border-t-[1px] py-3 text-sm flex justify-between text-gray-400">
        <div className="flex gap-1 text-white items-center">
          <HiLocationMarker />
          <small className="font-bold">Argentina</small>
        </div>
        <small>© 2023 Southbay S.R.L. Todos los derechos reservados.</small>
        <div className="flex gap-2">
          <small className="hover:text-white">Términos y Condiciones</small>
          <small className="hover:text-white">Política de privacidad y cookies</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
