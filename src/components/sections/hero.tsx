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
            <span>URBAN MODERN FASHION</span>
            <span className="flex">
              FOR ALL TASTES
              <span className="type">
                FIND OUT<span className="symbol">✧</span>
              </span>
            </span>
            <span>FOR ALL GENERATIONS</span>
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
      <div className="hero__banner">
        <div className="hero__banner-list">
          <ul>
            <li>
              <span>Plus-size clothing</span>
              <span>✦</span>
            </li>
            <li>
              <span>Shoes</span>
              <span>✦</span>
            </li>
            <li>
              <span>Accessories</span>
              <span>✦</span>
            </li>
            <li>
              <span>Outerwear</span>
              <span>✦</span>
            </li>
            <li>
              <span>Activewear</span>
              <span>✦</span>
            </li>
            <li>
              <span>Dresses</span>
              <span>✦</span>
            </li>
            <li>
              <span>Jeans</span>
              <span>✦</span>
            </li>
            <li>
              <span>Jackets & Coats</span>
              <span>✦</span>
            </li>
            <li>
              <span>T-shirt</span>
              <span>✦</span>
            </li>
            <li>
              <span>Tracksuit</span>
              <span>✦</span>
            </li>
            <li>
              <span>Blouses</span>
              <span>✦</span>
            </li>
          </ul>
          <ul>
            <li>
              <span>Plus-size clothing</span>
              <span>✦</span>
            </li>
            <li>
              <span>Shoes</span>
              <span>✦</span>
            </li>
            <li>
              <span>Accessories</span>
              <span>✦</span>
            </li>
            <li>
              <span>Outerwear</span>
              <span>✦</span>
            </li>
            <li>
              <span>Activewear</span>
              <span>✦</span>
            </li>
            <li>
              <span>Dresses</span>
              <span>✦</span>
            </li>
            <li>
              <span>Jeans</span>
              <span>✦</span>
            </li>
            <li>
              <span>Jackets & Coats</span>
              <span>✦</span>
            </li>
            <li>
              <span>T-shirt</span>
              <span>✦</span>
            </li>
            <li>
              <span>Tracksuit</span>
              <span>✦</span>
            </li>
            <li>
              <span>Blouses</span>
              <span>✦</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
