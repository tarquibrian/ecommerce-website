import { link } from "fs";
import React from "react";

interface HeaderDatas {
  id: number;
  label: string;
  link: string;
}

const HeaderData: HeaderDatas[] = [
  {
    id: 1,
    label: "Home",
    link: "/",
  },
  {
    id: 2,
    label: "Home",
    link: "/",
  },
  {
    id: 3,
    label: "Home",
    link: "/",
  },
];

const Header = () => {
  return (
    <nav>
      {HeaderData.map((items) => {
        return <h1>{items.id}</h1>;
      })}
    </nav>
  );
};

export default Header;
