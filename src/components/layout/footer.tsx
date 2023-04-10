import React from "react";
import FacebookIcon from "../icons/facebook";
import InstagramIcon from "../icons/instagram";
import TiktokIcon from "../icons/tiktok";
import { FooterData } from "@/data/footerData";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__container">
        <header className="footer__container-title">
          <h1>{FooterData.title}</h1>
        </header>
        <div className="footer__container-search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="youremail@email.com"
          />
          <span>Subscribe</span>
        </div>
        <div className="footer__container-menu">
          <h2>{FooterData.subtitle}</h2>
          <div className="menu-nav">
            <ul className="nav-links">
              {FooterData.menu.map((item) => (
                <li key={item.id}>{item.label}</li>
              ))}
            </ul>
          </div>
          <div className="menu-divider"></div>
          <div className="menu-details">
            <div className="menu-details-icons">
              <ul>
                {FooterData.icons.map((icon) => (
                  <li key={icon.id}>{icon.component}</li>
                ))}
              </ul>
            </div>
            <div className="menu-details-author">
              <h1>
                <a
                  aria-label="Author website"
                  href="https://tarquibrian.com/"
                  target={`_blank`}
                >
                  Powered by @Darvy
                </a>
              </h1>
            </div>
            <div className="menu-detail-terms">
              <ul className="terms-links">
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          {/* <div className="menu-divider"></div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
