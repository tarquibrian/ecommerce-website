import { StaticImageData } from "next/image";
import img1 from "../images/about1.jpg";
import img2 from "../images/about2.jpg";
import img3 from "../images/about3.jpg";

interface AboutDatas {
  title: string;
  desc: string;
  image1: string | StaticImageData;
  image2: string | StaticImageData;
  image3: string | StaticImageData;
}

export const AboutData: AboutDatas = {
  title: "Coulour For Every Foot",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut error obcaecati ex, at accusantium illo sint quo amet explicabo ipsam! Eaque suscipit cumque animi iste expedita voluptatum fuga similique quos.",
  image1: img1,
  image2: img2,
  image3: img3,
};
