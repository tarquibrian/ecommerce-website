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
        <div className="hero__container-desc">
          <p>
            MODERN FASHION is a fashion brand that offers a wide range of
            stylish and contemporary clothing for both men and women. The
            company prides itself on its use of high-quality materials,
            attention to detail, and commitment to ethical and sustainable
            manufacturing practices.
          </p>
        </div>
        <div className="hero__container-img"></div>
      </div>
    </section>
  );
};

export default Hero;
