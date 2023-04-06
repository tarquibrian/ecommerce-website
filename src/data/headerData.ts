interface HeaderDatas {
  logo: Logo;
  menu: Menu[];
  icons: Icons[];
}

interface Logo {
  id?: number;
  label: string;
}

interface Menu {
  id: number;
  label: string;
  link: string;
}

interface Icons {
  id: number;
  label: string;
  link: string;
}

export const HeaderData: HeaderDatas = {
  logo: {
    label: "ModernFashion",
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
  icons: [
    {
      id: 1,
      label: "Instagram Icon",
      link: "instagram.com",
    },
    {
      id: 2,
      label: "Tiktok Icon",
      link: "tiktok.com",
    },
    {
      id: 3,
      label: "Facebook",
      link: "facebook.com",
    },
  ],
};
