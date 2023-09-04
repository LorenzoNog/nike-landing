import React from "react";
import Slider from "./Slider";

const Hero = () => {
  return (
    <section className="bg-[#f5f5f5] gap-5 flex flex-col justify-center items-center">
        <Slider/>
      <img className="w-[96%] object-cover h-[100%]" src="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/c5b51d4d-0db3-46eb-b955-85aa249efe90___6c7e60ef68549de47bd69ae023da324c.jpg" />
      <div className="flex flex-col justify-center items-center gap-4">
        <h3 className="text-center text-xl font-medium">Pegasus 40 Aniversario</h3>
        <h1 className="uppercase title text-5xl text-center font-extrabold">
            El mundo corre con pegasus
        </h1>
        <button className="bg-black py-2 px-7 rounded-3xl text-white font-bold text-[15px] hover:bg-gray-700">
            Comprar
        </button>
      </div>
      <img className="mt-5 w-[96%] h-[100%]" src="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/20249999-7d08-4845-859d-365a7c14b4c1___dd4b73087597b18bde61e6ee885818e5.jpg"/>
    </section>
  );
};

export default Hero;
