import { StaticImageData } from "next/image";
import img1 from "../images/blog2.jpg";
import img2 from "../images/blog3.jpg";
import img3 from "../images/blog4.jpg";
import img4 from "../images/blog5.jpg";

interface BlogDatas {
  title: string;
  articles: Articles[];
}

interface Articles {
  id: number;
  path: string | StaticImageData;
  title: string;
  desc: string;
  button: string;
  span: boolean;
}

export const BlogData: BlogDatas = {
  title: "Fashion News",
  articles: [
    {
      id: 1,
      path: img1,
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quibusdam cumque eum sequi voluptatibus aut corporis pariatur illum veritatis doloremque velit, cupiditate corrupti odit in vel qui. Quo, accusantium possimus.",
      button: "View More",
      span: true,
    },
    {
      id: 2,
      path: img2,
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quibusdam cumque eum sequi voluptatibus aut corporis pariatur illum veritatis doloremque velit, cupiditate corrupti odit in vel qui. Quo, accusantium possimus.",
      button: "View More",
      span: false,
    },
    {
      id: 3,
      path: img3,
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quibusdam cumque eum sequi voluptatibus aut corporis pariatur illum veritatis doloremque velit, cupiditate corrupti odit in vel qui. Quo, accusantium possimus.",
      button: "View More",
      span: false,
    },
    {
      id: 4,
      path: img4,
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quibusdam cumque eum sequi voluptatibus aut corporis pariatur illum veritatis doloremque velit, cupiditate corrupti odit in vel qui. Quo, accusantium possimus.",
      button: "View More",
      span: true,
    },
  ],
};
