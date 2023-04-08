import React from "react";
import img1 from "../../images/about1.jpg";
import img2 from "../../images/about2.jpg";
import Image from "next/image";
import img3 from "../../images/about3.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="about__container">
        <div className="about__container-left">
          <header className="title">
            <h1>Coulour For Every Foot</h1>
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut error
            obcaecati ex, at accusantium illo sint quo amet explicabo ipsam!
            Eaque suscipit cumque animi iste expedita voluptatum fuga similique
            quos.
          </p>
          <div className="images">
            <Image className="images-one" src={img2} alt="img2 fron about" />
            <Image className="images-two" src={img3} alt="img2 fron about" />
          </div>
        </div>
        <div className="about__container-right">
          <Image src={img1} alt="about image presentaion" />
        </div>
      </div>
    </section>
  );
};

export default About;
