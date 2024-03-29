import React from "react";
import { HeaderData } from "@/data/headerData";
import Link from "next/link";
import FacebookIcon from "../icons/facebook";
import MenuIcon from "../icons/menu";
import { motion } from "framer-motion";

const Header = () => {
  const { logo, menu, icons } = HeaderData;
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
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
    </motion.nav>
  );
};

export default Header;
