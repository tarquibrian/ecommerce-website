import { link } from "fs";
import React from "react";
import { HeaderData } from "@/data/headerData";

const Header = () => {
  return (
    <nav>
      <div className="navbar__container">
        <div className="navbar__container-logo"></div>
        <div className="navbar__container-menu">
          {HeaderData.map((items) => {
            return <h1>{items.label}</h1>;
          })}
        </div>
        <div className="navbar__container-icons"></div>
      </div>
    </nav>
  );
};

export default Header;
