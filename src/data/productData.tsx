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
    },
    {
      id: 2,
      title: "Relaxed Fit Teddy",
      desc: "Overshirt",
      price: "$100.19",
    },
    {
      id: 3,
      title: "Relaxed Fit Teddy",
      desc: "Overshirt",
      price: "$100.19",
    },
    {
      id: 4,
      title: "Relaxed Fit Teddy",
      desc: "Overshirt",
      price: "$100.19",
    },
    {
      id: 5,
      title: "Relaxed Fit Teddy",
      desc: "Overshirt",
      price: "$100.19",
    },
    {
      id: 6,
      title: "Relaxed Fit Teddy",
      desc: "Overshirt",
      price: "$100.19",
    },
  ],
};
