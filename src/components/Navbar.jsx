import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="nav_logo">
        <a href="/">
          <img src={require("../assets/photos/Harvis logo 1.png")} alt="" />
        </a>
      </div>
      <div className="menu_items">
        <ul>
          <li>
            <Link to={"/about_us"} name="section" >About Us</Link>
          </li>
          <li>
            <HashLink to={"/#products"} name="section">Product</HashLink>
          </li>
          <li>
            <HashLink to={"/#services"} name="section">Services</HashLink>
          </li>
          <li className="nav_btn1">
            <HashLink to={"/#location"}>Contact Us</HashLink>
          </li>
          <li className="nav_btn2">
            <HashLink to={"/#location"}>Location</HashLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
