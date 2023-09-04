import React from "react";
import UtilityNavbar from "./components/UtilityNavbar";
import PrimaryNavbar from "./components/PrimaryNavbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Acg from "./components/Acg";
import Icons from "./components/Icons";
import ChooseYourLook from "./components/ChooseYourLook";
import Image from "./components/Image";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <UtilityNavbar />
      <PrimaryNavbar />
      <Hero />
      <FeaturedProducts />
      <Acg />
      <Icons />
      <ChooseYourLook />
      <Image />
      <Footer />
    </>
  );
};

export default App;
