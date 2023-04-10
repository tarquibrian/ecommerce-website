import { StaticImageData } from "next/image";
import img1 from "../images/product1.jpg";
import img2 from "../images/product2.jpg";
import img3 from "../images/product3.jpg";
import img4 from "../images/product4.jpg";
import img5 from "../images/product5.jpg";
import img6 from "../images/product6.jpg";

interface ProductDatas {
  title: string;
  menu: Menu[];
  products: Products[];
}

interface Menu {
  id: number;
  label: string;
}

interface Products {
  id: number;
  title: string;
  desc: string;
  price: string;
  image: string | StaticImageData;
}

export const ProductData: ProductDatas = {
  title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  menu: [
    {
      id: 1,
      label: "T-shirt",
    },
    {
      id: 2,
      label: "Hoddie",
    },
    {
      id: 3,
      label: "Jackets",
    },
    {
      id: 4,
      label: "Shirt",
    },
    {
      id: 5,
      label: "Cardigan",
    },
  ],
  products: [
    {
      id: 1,
      title: "Relaxed Fit Teddy",
      desc: "Overshirt",
      price: "$100.19",
      image: img1,
    },
    {
      id: 2,
      title: "Relaxed Fit Teddy",
      desc: "Overshirt",
      price: "$100.19",
      image: img2,
    },
    {
      id: 3,
      title: "Relaxed Fit Teddy",
      desc: "Overshirt",
      price: "$100.19",
      image: img3,
    },
    {
      id: 4,
      title: "Relaxed Fit Teddy",
      desc: "Overshirt",
      price: "$100.19",
      image: img4,
    },
    {
      id: 5,
      title: "Relaxed Fit Teddy",
      desc: "Overshirt",
      price: "$100.19",
      image: img5,
    },
    {
      id: 6,
      title: "Relaxed Fit Teddy",
      desc: "Overshirt",
      price: "$100.19",
      image: img6,
    },
  ],
};
