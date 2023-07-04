import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => (
  <nav className="app-navbar">
    <div className="app-navbar-logo">
      <img src={images.gericht} alt="logo" />
    </div>
    <ul className="app-navbar-links">
      <li className="p-opensans">
        <a href="#home">Home</a>
      </li>
      <li className="p-opensans">
        <a href="#about">About</a>
      </li>
      <li className="p-opensans">
        <a href="#menu">Menu</a>
      </li>
      <li className="p-opensans">
        <a href="#awards">Awards</a>
      </li>
      <li className="p-opensans">
        <a href="#contact">Contact</a>
      </li>
    </ul>

    <div className="app-navbar-login">
      <a href="#login" className="p-opensans">
        Login / Register
      </a>
      <div />
      <a href="/" className="p-opensans">
        Book table
      </a>
    </div>

    <div className="app-navbar-mobile">
      <GiHamburgerMenu color="#ffff" fontSize={27} onClick={() => {}} />

      <div className="app-navbar-mobile-overlay flex-center slide-bottom">
        <MdOutlineRestaurantMenu
          color="#ffff"
          fontSize={27}
          onClick={() => {}}
        />
        <ul className="app-navbar-mobile-links">
          <li className="p-opensans">
            <a href="#home">Home</a>
          </li>
          <li className="p-opensans">
            <a href="#about">About</a>
          </li>
          <li className="p-opensans">
            <a href="#menu">Menu</a>
          </li>
          <li className="p-opensans">
            <a href="#awards">Awards</a>
          </li>
          <li className="p-opensans">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
