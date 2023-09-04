import React from "react";
import PRODUCTS from "../data.json";
//import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const ProductCard = () => {

  return (
    <div className="bg-white grid grid-cols-3 gap-3">
      {/* <div className="cursor-pointer text-gray-500 text-lg translate-x-[5%] translate-y-[35%]">
        <AiOutlineLeft />
      </div> */}
      {PRODUCTS.map((product) => {
        return (
          <div key={product.title} className="flex flex-col py-5 px-3 gap-1">
            <img src={product.img} className="max-w-[500px] w-[100%]" />
            <h3 className="font-medium text-md">{product.title}</h3>
            <small className="text-gray-400">{product.desc}</small>
            <h2 className="text-sm font-bold">$ {product.price}</h2>
          </div>
        );
      })}
      {/* <div className="cursor-pointer text-gray-500 text-lg translate-x-[5%] translate-y-[35%]">
        <AiOutlineRight />
      </div> */}
    </div>
  );
};

export default ProductCard;
