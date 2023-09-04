import React from "react";

const Acg = () => {
  return (
    <section className="px-6 grid grid-cols-2 gap-4 mt-8">
      <div className="flex flex-col justify-start">
        <img src="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/79b18d17-8920-4c81-a7f6-1fcc15679875___eb50da9c37f8994fb9aa643ee371fe78.jpg" />
        <h2 className="font-medium text-2xl pt-2 pb-2">Skateboarding</h2>
        <button className="bg-black py-2 w-[15%] rounded-3xl text-white font-bold text-[15px] hover:bg-gray-700">
          Comprar
        </button>
      </div>
      <div className="flex flex-col justify-start">
        <img src="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/6c9db0bc-1a8c-4fb4-be61-ad3db537faf0___001df05deb30914d8635bdc969b379a5.jpg" />
        <h2 className="font-medium text-2xl pt-2 pb-2">ACG</h2>
        <button className="bg-black py-2 w-[15%] rounded-3xl text-white font-bold text-[15px] hover:bg-gray-700">
          Comprar
        </button>
      </div>
    </section>
  );
};

export default Acg;
