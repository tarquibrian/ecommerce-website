import React from "react";
import FacebookIcon from "../icons/facebook";
import InstagramIcon from "../icons/instagram";
import TiktokIcon from "../icons/tiktok";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__container">
        <header className="footer__container-title">
          <h1>Find Your Unique Street Style at Our Ecommerce</h1>
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
          <h2>MODERNFASHION</h2>
          <div className="menu-nav">
            <ul className="nav-links">
              <li>Home</li>
              <li>Product</li>
              <li>Testimonial</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="menu-divider"></div>
          <div className="menu-details">
            <div className="menu-details-icons">
              <ul>
                <li>
                  <FacebookIcon />
                </li>
                <li>
                  <InstagramIcon />
                </li>
                <li>
                  <TiktokIcon />
                </li>
              </ul>
            </div>
            <div className="menu-detail-terms">
              <ul className="terms-links">
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
