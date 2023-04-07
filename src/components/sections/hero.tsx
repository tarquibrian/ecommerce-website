import React from "react";
import Header from "../layout/header";
import imgModel from "../../images/model.png";
import Image from "next/image";

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
        <div className="hero__container-img">
          <Image
            src={imgModel}
            alt="imgmodel fron hero"
            width={800}
            placeholder="blur"
            blurDataURL={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
