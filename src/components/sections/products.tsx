import Image from "next/image";
import React, { useEffect } from "react";
import img1 from "../../images/product2.jpg";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { ProductData } from "@/data/productData";

const itemsID = ["T-shirt", "Hoddie", "Jackets", "Shirt", "Cardigan"];
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const listItem = {
  hidden: { x: 100, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

export const Products = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);
  return (
    <section id="products" ref={ref}>
      <div className="products__container">
        <motion.header
          className="products__container-title"
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
          <h1>{ProductData.title}</h1>
        </motion.header>
        <motion.div
          className="products__container-nav"
          // initial="hidden"
          // animate={controls}
          // transition={{ duration: 0.8, delay: 0.3 }}
          // variants={{
          //   visible: {
          //     x: 0,
          //     opacity: 1,
          //     transition: { duration: 0.8, delay: 0.3 },
          //   },
          //   hidden: { x: 100, opacity: 0 },
          // }}
        >
          <motion.ul
            // variants={container}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.8, delay: 0.3 }}
            variants={{
              visible: {
                x: 0,
                opacity: 1,
                transition: { staggerChildren: 0.3, duration: 0.8, delay: 0.3 },
              },
              hidden: { x: 100, opacity: 0 },
            }}
          >
            {ProductData.menu.map((items) => {
              return <li key={items.id}>{items.label}</li>;
            })}
            {/* <li>T-shirt</li>
            <li>Hoddie</li>
            <li>Jackets</li>
            <li>Shirt</li>
            <li>Cardigan</li> */}
          </motion.ul>
        </motion.div>
        <motion.article
          className="products__container-article"
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
          {ProductData.products.map((items) => (
            <div className="article-card" key={items.id}>
              <Image src={img1} alt="card product from page" />
              <div className="card-details">
                <div className="details-name">
                  <h2>{items.title}</h2>
                  <h3>{items.desc}</h3>
                </div>
                <div className="details-price">
                  <span>{items.price}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.article>
      </div>
    </section>
  );
};
