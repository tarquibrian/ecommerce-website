import Image from "next/image";
import React, { useEffect } from "react";
import img1 from "../../images/blog1.jpg";
import img2 from "../../images/blog2.jpg";
import img3 from "../../images/blog3.jpg";
import img4 from "../../images/blog4.jpg";
import img5 from "../../images/blog5.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BlogData } from "@/data/blogData";

const Blog = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <section id="blog" ref={ref}>
      <div className="blog__container">
        <motion.header
          className="blog__container-title"
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.8, delay: 0.3 }}
          variants={{
            visible: {
              x: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.3 },
            },
            hidden: { x: 100, opacity: 0 },
          }}
        >
          <h1>{BlogData.title}</h1>
        </motion.header>
        <motion.article
          className="blog__container-article"
          initial="hidden"
          animate={controls}
          transition={{ duration: 1, delay: 0.3 }}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 1, delay: 0.8 },
            },
            hidden: { y: 100, opacity: 0 },
          }}
        >
          {BlogData.articles.map((article) => (
            <div
              key={article.id}
              className={`article-card ${article.span ? "horizontal" : ""}`}
            >
              <Image src={article.path} alt="image from article blog" />
              <div className="article-card-details">
                <h2>{article.title}</h2>
                <p>{article.desc}</p>
                <span>{article.button}</span>
              </div>
            </div>
          ))}
          {/* <div className="article-card horizontal">
            <Image src={img2} alt="image from article blog" />
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
            <Image src={img3} alt="image from article blog" />
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
            <Image src={img4} alt="image from article blog" />
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
            <Image src={img5} alt="image from article blog" />
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
          </div> */}
        </motion.article>
      </div>
    </section>
  );
};

export default Blog;
