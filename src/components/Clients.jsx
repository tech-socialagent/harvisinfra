import React from "react";
import "../Styles/Clients.css";

const Clients = () => {
  return (
    <div className="our_products_section">
      <div className="flo_art2"></div>
      <div className="section_header">
        <h3>Our Clients.</h3>
        <div className="sec_desc">
          Quality. Safety. Reliability. Every time.
        </div>
      </div>
      <div className="slider">
        <div className="tech-slideshow">
          <div className="mover-1"></div>
          <div className="mover-2"></div>
        </div>
        {/* <div className="background">
            <img className="bg-img" src={require("../assets/photos/bitumen.jpeg")} alt="" />
            <img  className="bg-img"src={require("../assets/photos/Emulsion.jpg")} alt="" />
            <img  className="bg-img"src={require("../assets/photos/cement.jpg")} alt="" />
            <img  className="bg-img"src={require("../assets/photos/bitumen.jpeg")} alt="" />
            <img className="bg-img" src={require("../assets/photos/steel.jpg")} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Clients;
