import Image from "next/image";
import React from "react";
import img1 from "../../images/product2.jpg";

export const Products = () => {
  return (
    <section id="products">
      <div className="products__container">
        <header className="products__container-title">
          <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
        </header>
        <div className="products__container-nav">
          <ul>
            <li>T-shirt</li>
            <li>Hoddie</li>
            <li>Jackets</li>
            <li>Shirt</li>
            <li>Cardigan</li>
          </ul>
        </div>
        <article className="products__container-article">
          <div className="article-card">
            <Image src={img1} alt="card product from page" />
            <div className="card-details">
              <div className="details-name">
                <h2>Relaxed Fit Teddy</h2>
                <h3>Overshirt</h3>
              </div>
              <div className="details-price">
                <span>$100.19</span>
              </div>
            </div>
          </div>
          <div className="article-card">
            <Image src={img1} alt="card product from page" />
            <div className="card-details">
              <div className="details-name">
                <h2>Relaxed Fit Teddy</h2>
                <h3>Overshirt</h3>
              </div>
              <div className="details-price">
                <span>$100.19</span>
              </div>
            </div>
          </div>
          <div className="article-card">
            <Image src={img1} alt="card product from page" />
            <div className="card-details">
              <div className="details-name">
                <h2>Relaxed Fit Teddy</h2>
                <h3>Overshirt</h3>
              </div>
              <div className="details-price">
                <span>$100.19</span>
              </div>
            </div>
          </div>
          <div className="article-card">
            <Image src={img1} alt="card product from page" />
            <div className="card-details">
              <div className="details-name">
                <h2>Relaxed Fit Teddy</h2>
                <h3>Overshirt</h3>
              </div>
              <div className="details-price">
                <span>$100.19</span>
              </div>
            </div>
          </div>
          <div className="article-card">
            <Image src={img1} alt="card product from page" />
            <div className="card-details">
              <div className="details-name">
                <h2>Relaxed Fit Teddy</h2>
                <h3>Overshirt</h3>
              </div>
              <div className="details-price">
                <span>$100.19</span>
              </div>
            </div>
          </div>
          <div className="article-card">
            <Image src={img1} alt="card product from page" />
            <div className="card-details">
              <div className="details-name">
                <h2>Relaxed Fit Teddy</h2>
                <h3>Overshirt</h3>
              </div>
              <div className="details-price">
                <span>$100.19</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
