interface HeaderDatas {
  logo: Logo;
  menu: Menu[];
}

interface Logo {
  id: number;
  label: string;
}

interface Menu {
  id: number;
  label: string;
  link: string;
}

export const HeaderData: HeaderDatas = {
  logo: {
    id: 1,
    label: "test",
  },
  menu: [
    {
      id: 1,
      label: "Home",
      link: "/",
    },
    {
      id: 2,
      label: "Products",
      link: "/products",
    },
    {
      id: 3,
      label: "Testimonials",
      link: "/testimonials",
    },
    {
      id: 4,
      label: "Blog",
      link: "/blog",
    },
    {
      id: 5,
      label: "Contact",
      link: "/contact",
    },
  ],
};
// {
//   id: 1,
//   label: "Home",
//   link: "/",
// },
// {
//   id: 2,
//   label: "Products",
//   link: "/products",
// },
// {
//   id: 3,
//   label: "Testimonials",
//   link: "/testimonials",
// },
// {
//   id: 4,
//   label: "Blog",
//   link: "/blog",
// },
// {
//   id: 5,
//   label: "Contact",
//   link: "/contact",
// },
