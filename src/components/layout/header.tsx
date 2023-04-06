import { link } from "fs";
import React from "react";
import { HeaderData } from "@/data/headerData";

const Header = () => {
  const { logo, menu, icons } = HeaderData;
  return (
    <nav>
      <div className="navbar__container">
        <div className="navbar__container-logo">
          <span>{logo.label}</span>
        </div>
        <div className="navbar__container-menu">
          {menu.map((items) => {
            return <h1>{items.label}</h1>;
          })}
        </div>
        <div className="navbar__container-icons">
          {icons.map((item) => {
            return <a href={item.link}>{item.label}</a>;
          })}
        </div>
      </div>
    </nav>
  );
};

export default Header;
