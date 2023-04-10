import FacebookIcon from "@/components/icons/facebook";
import InstagramIcon from "@/components/icons/instagram";
import TiktokIcon from "@/components/icons/tiktok";

interface FooterDatas {
  title: string;
  subtitle: string;
  menu: Menu[];
  icons: Icons[];
}

interface Menu {
  id: number;
  label: string;
}

interface Icons {
  id: number;
  label: string;
  link: string;
  component: React.ReactNode;
}

export const FooterData: FooterDatas = {
  title: "Find Your Unique Street Style at Our Ecommerce",
  subtitle: "MODERNFASHION",
  menu: [
    {
      id: 1,
      label: "Home",
    },
    {
      id: 2,
      label: "Product",
    },
    {
      id: 3,
      label: "Testimonial",
    },
    {
      id: 4,
      label: "Blog",
    },
    {
      id: 5,
      label: "Contact",
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
