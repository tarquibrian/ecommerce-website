import React from "react";
import Header from "../layout/header";

const Hero = () => {
  return (
    <section id="hero">
      <Header />
      <div className="hero__container">
        <div className="hero__container-title">
          <h1>
            URBAN MODERN FASHION
            <br />
            FOR ALL TASTES
            <br />
            FOR ALL GENERATIONS
          </h1>
        </div>
        <div className="hero__container-desc"></div>
        <div className="hero__container-img"></div>
      </div>
    </section>
  );
};

export default Hero;
