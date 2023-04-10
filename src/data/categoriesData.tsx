import { StaticImageData } from "next/image";
import img1 from "../images/categories1.jpg";
import img2 from "../images/categories2.jpg";
import img3 from "../images/categories3.jpg";
import img4 from "../images/categories4.jpg";

interface CategoriesDatas {
  title: string;
  categories: Categories[];
}

interface Categories {
  id: number;
  label: string;
  path: string | StaticImageData;
}

export const CategoriesData: CategoriesDatas = {
  title: "New Collection: ModerFashion For The Fashion-Forward",
  categories: [
    {
      id: 1,
      label: "T-shirt",
      path: img1,
    },
    {
      id: 2,
      label: "Oversized Jaz",
      path: img2,
    },
    {
      id: 3,
      label: "Oversized T-shirt",
      path: img3,
    },
    {
      id: 4,
      label: "Dresses",
      path: img4,
    },
  ],
};
