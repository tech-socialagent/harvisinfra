import React from "react";
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
            <a href="/about_us" name="section" >About Us</a>
          </li>
          <li>
            <a href="" name="section">Product</a>
          </li>
          <li>
            <a href="" name="section">Services</a>
          </li>
          <li className="nav_btn1">
            <a href="">Contact Us</a>
          </li>
          <li className="nav_btn2">
            <a href="">Location</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
