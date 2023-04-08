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
            <div className="card-button">
              <span>T-shirt</span>
            </div>
          </div>
          <div className="gallery-card">
            <Image src={img1} alt="image from gallery article" />
            <div className="card-button">
              <span>Oversized Jaz</span>
            </div>
          </div>
          <div className="gallery-card">
            <Image src={img1} alt="image from gallery article" />
            <div className="card-button">
              <span>Oversized T-shirt</span>
            </div>
          </div>
          <div className="gallery-card">
            <Image src={img1} alt="image from gallery article" />
            <div className="card-button">
              <span>Fit Hoodie</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
