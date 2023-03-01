import React from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="nav_logo">
        <img src={require("../assets/photos/Harvis logo 1.png")} alt="" />
      </div>
      <div className="menu_items">
        <ul>
          <li>About Us</li>
          <li>Product</li>
          <li>Services</li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">Location</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
