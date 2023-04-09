import React, { useEffect } from "react";
import img1 from "../../images/about1.jpg";
import img2 from "../../images/about2.jpg";
import Image from "next/image";
import img3 from "../../images/about3.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AboutData } from "@/data/aboutData";

const variants = {
  visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.6 } },
  hidden: { y: 200, opacity: 0, scale: 1 },
};

const About = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <section id="about" ref={ref}>
      <div className="about__container">
        <div className="about__container-left">
          <motion.header
            className="title"
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.8, delay: 0.3 }}
            variants={{
              visible: {
                opacity: 1,
                transition: { duration: 0.8, delay: 0.3 },
              },
              hidden: { opacity: 0 },
            }}
          >
            <h1>{AboutData.title}</h1>
          </motion.header>
          <motion.p
            initial="hidden"
            animate={controls}
            transition={{ duration: 1 }}
            variants={{
              visible: {
                opacity: 1,
                transition: { duration: 1, delay: 0.3 },
              },
              hidden: { opacity: 0 },
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut error
            obcaecati ex, at accusantium illo sint quo amet explicabo ipsam!
            Eaque suscipit cumque animi iste expedita voluptatum fuga similique
            quos.
          </motion.p>
          <motion.div
            className="images"
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.8 }}
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, delay: 0.3 },
              },
              hidden: { y: 200, opacity: 0, scale: 1 },
            }}
          >
            <Image className="images-one" src={img2} alt="img2 fron about" />
            <Image className="images-two" src={img3} alt="img2 fron about" />
          </motion.div>
        </div>
        <motion.div
          className="about__container-right"
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.8, delay: 0.3 }}
          variants={{
            visible: {
              x: 0,
              opacity: 1,
              scale: 1,
              transition: { duration: 0.8, delay: 0.3 },
            },
            hidden: { x: 200, opacity: 0, scale: 1 },
          }}
        >
          <Image src={img1} alt="about image presentaion" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
