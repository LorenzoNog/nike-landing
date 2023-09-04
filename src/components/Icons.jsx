import React from "react";

const slides = [
  {
    url: "https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/c9d152ca-454a-41f0-a9fa-2c4098a1f267___61aff83abb2b73a12a20972090a7d009.jpg",
    name: "Jordan",
  },
  {
    url: "https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/883f6e0b-eed9-45ea-9c87-20554ab7b4ee___759b90465eb1a3e8cfff99d971dca54c.jpg",
    name: "Blazer",
  },
  {
    url: "https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/2fdd6996-4fea-418e-a50f-949998ee34d3___e8d7e1ea96ae61f572d789f29b2cd62d.jpg",
    name: "Dunk",
  },
  {
    url: "https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/418b7a65-25f1-4de0-89c0-9041deb4eb87___591162711934970f0c0cf0fc51399755.jpg",
    name: "Bruin",
  },
  {
    url: "https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/e50ed4ca-60c6-48a9-abbc-e03418c19764___1939bc8636df972de8ea8cd619bb801c.jpg",
    name: "Air Force",
  },
  {
    url: "https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/b637ce49-383e-4c48-97b0-a92a5c10ca97___7bdafc7662e3fecfa007f8235735e05d.jpg",
    name: "Huarache",
  },
  {
    url: "https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/8e9327f5-80e3-463f-b656-97683e12e85e___ad0285c14d6c5c50fa83de45b4ed7488.jpg",
    name: "Air Max",
  },
];

const Icons = () => {
  return (
    <section className="py-5 px-5 flex flex-col ">
      <h2 className="font-medium text-2xl pb-4 pt-10 ">Nuestros Iconos</h2>
      <div className="pt-5">
        <div className="flex gap-5">
          {slides.map((slide) => {
            return (
              <div className="w-[200px] h-[200px] flex flex-col justify-center items-center gap-2">
                <img src={slide.url} className="hover:shadow-xl" />
                <h2 className="font-medium text-xl">{slide.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Icons;
