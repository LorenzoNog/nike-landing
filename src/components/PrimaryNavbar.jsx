import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";

const PrimaryNavbar = () => {
  return (
    <section className="flex justify-between items-center px-5 py-2 flex-grow ">
      <div>
        <img
          src="https://nikearprod.vtexassets.com/assets/vtex/assets-builder/nikearprod.store/2.0.63/icons/Assets_for_off%20platform/swoosh___33f7ffaf2fc124733c2c4a60a12a1160.svg"
          className="w-[59px] h-[40px]"
        />
      </div>
      <nav className="flex flex-grow justify-center pl-[10%]">
        <ul className="flex items-center gap-10 text-sm font-medium">
          <li>Destacados</li>
          <li>Hombre</li>
          <li>Mujer</li>
          <li>Niño/a</li>
          <li>Accesorios</li>
        </ul>
      </nav>
      <div className="flex items-center gap-5">
        <div>
          <AiOutlineSearch className="absolute text-xl top-[7%] right-[11.5%]" />
          <input
            className="bg-[#f5f5f5] w-[150px] rounded-3xl py-1 pr-3 pl-8"
            placeholder="Buscar"
          />
        </div>
        <div>
          <BsBag />
        </div>
      </div>
    </section>
  );
};

export default PrimaryNavbar;
