import React from "react";
import Header from "../layout/header";

const Hero = () => {
  return (
    <section id="hero">
      <Header />
      <div className="hero__container">
        <div className="hero__container-title"></div>
        <div className="hero__container-desc"></div>
        <div className="hero__container-img"></div>
      </div>
    </section>
  );
};

export default Hero;
