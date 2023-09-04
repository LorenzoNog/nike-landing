import React from "react";

const UtilityNavbar = () => {
  return (
    <section className="bg-[#f5f5f5] px-5 py-1 flex justify-between items-center">
      <div>
        <img
          className="w-[24px] h-[24px]"
          src="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/f97c1ee4-0e66-4225-b378-f4ae7d491bc7___39627060035c5a0d813f57675cef86ea.svg"
        />
      </div>
      <ul className="flex gap-2 text-[12px] font-medium">
        <li>Find a Store</li>|<li>Help</li>|<li>Join Us</li>|<li>Sign In</li>
      </ul>
    </section>
  );
};

export default UtilityNavbar;
