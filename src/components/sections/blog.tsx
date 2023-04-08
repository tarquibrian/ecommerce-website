import Image from "next/image";
import React from "react";
import img1 from "../../images/blog1.jpg";
import img2 from "../../images/blog2.jpg";
import img3 from "../../images/blog3.jpg";

const Blog = () => {
  return (
    <section id="blog">
      <div className="blog__container">
        <header className="blog__container-title">
          <h1>Fashion News</h1>
        </header>
        <article className="blog__container-article">
          <div className="article-card horizontal">
            <Image src={img1} alt="image from article blog" />
            <div className="article-card-details">
              <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                quibusdam cumque eum sequi voluptatibus aut corporis pariatur
                illum veritatis doloremque velit, cupiditate corrupti odit in
                vel qui. Quo, accusantium possimus.
              </p>
              <span>View More</span>
            </div>
          </div>
          <div className="article-card vertical">
            <Image src={img1} alt="image from article blog" />
            <div className="article-card-details">
              <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                quibusdam cumque eum sequi voluptatibus aut corporis pariatur
                illum veritatis doloremque velit, cupiditate corrupti odit in
                vel qui. Quo, accusantium possimus.
              </p>
              <span>View More</span>
            </div>
          </div>
          <div className="article-card vertical">
            <Image src={img1} alt="image from article blog" />
            <div className="article-card-details">
              <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                quibusdam cumque eum sequi voluptatibus aut corporis pariatur
                illum veritatis doloremque velit, cupiditate corrupti odit in
                vel qui. Quo, accusantium possimus.
              </p>
              <span>View More</span>
            </div>
          </div>
          <div className="article-card horizontal">
            <Image src={img1} alt="image from article blog" />
            <div className="article-card-details">
              <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                quibusdam cumque eum sequi voluptatibus aut corporis pariatur
                illum veritatis doloremque velit, cupiditate corrupti odit in
                vel qui. Quo, accusantium possimus.
              </p>
              <span>View More</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Blog;
