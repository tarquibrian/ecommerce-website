import React from "react";
import { HeaderData } from "@/data/headerData";
import Link from "next/link";
import FacebookIcon from "../icons/facebook";
import MenuIcon from "../icons/menu";

const Header = () => {
  const { logo, menu, icons } = HeaderData;
  return (
    <nav>
      <div className="navbar__container">
        <div className="navbar__container-logo">
          <h1 translate="no">{logo.label}</h1>
        </div>
        <div className="navbar__container-menu">
          <ul>
            {menu.map((items) => {
              return (
                <li key={items.id}>
                  <Link href={items.link}>{items.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar__container-icons">
          <ul>
            {icons.map((item) => {
              return (
                <li key={item.id}>
                  <Link href={item.link} target="_blank" rel="noreferrer">
                    <span>{item.component}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar__container-menuicon">
          <MenuIcon />
        </div>
      </div>
    </nav>
  );
};

export default Header;
