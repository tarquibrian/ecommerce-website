import FacebookIcon from "@/components/icons/facebook";
import InstagramIcon from "@/components/icons/instagram";
import TiktokIcon from "@/components/icons/tiktok";
import React from "react";

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
  component?: React.ReactNode;
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
      link: "/",
    },
    {
      id: 3,
      label: "Testimonials",
      link: "/",
    },
    {
      id: 4,
      label: "Blog",
      link: "/",
    },
    {
      id: 5,
      label: "Contact",
      link: "/",
    },
  ],
  icons: [
    {
      id: 1,
      label: "Instagram Icon",
      link: "https://www.instagram.com",
      component: <InstagramIcon />,
    },
    {
      id: 2,
      label: "Tiktok Icon",
      link: "https://www.tiktok.com",
      component: <TiktokIcon />,
    },
    {
      id: 3,
      label: "Facebook",
      link: "https://www.facebook.com/",
      component: <FacebookIcon />,
    },
  ],
};
