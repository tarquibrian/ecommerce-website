import Image from "next/image";
import React, { useEffect } from "react";
import img1 from "../../images/product2.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CategoriesData } from "@/data/categoriesData";

export const Categories = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);
  return (
    <section id="categories" ref={ref}>
      <div className="categories__section">
        <motion.header
          className="categories__section-title"
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.8, delay: 0.3 }}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.3 },
            },
            hidden: {
              y: 100,
              opacity: 0,
            },
          }}
        >
          <h1>{CategoriesData.title}</h1>
        </motion.header>
        <motion.article
          className="categories__section-gallery"
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
          {CategoriesData.categories.map((category) => (
            <div className="gallery-card" key={category.id}>
              <Image src={category.path} alt="image from gallery article" />
              <div className="card-button">
                <span>{category.label}</span>
              </div>
            </div>
          ))}
        </motion.article>
      </div>
    </section>
  );
};
