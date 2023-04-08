import Image from "next/image";
import React from "react";
import img1 from "../../images/product2.jpg";

export const Categories = () => {
  return (
    <section id="categories">
      <div className="categories__section">
        <header className="categories__section-title">
          <h1>New Collection: ModerFashion For The Fashion-Forward</h1>
        </header>
        <article className="categories__section-gallery">
          <div className="gallery-card">
            <Image src={img1} alt="image from gallery article" />
            <span>T-shirt</span>
          </div>
          <div className="gallery-card">
            <Image src={img1} alt="image from gallery article" />
            <span>Oversized Jaz</span>
          </div>
          <div className="gallery-card">
            <Image src={img1} alt="image from gallery article" />
            <span>Oversized T-shirt</span>
          </div>
          <div className="gallery-card">
            <Image src={img1} alt="image from gallery article" />
            <span>Fit Hoodie</span>
          </div>
        </article>
      </div>
    </section>
  );
};
