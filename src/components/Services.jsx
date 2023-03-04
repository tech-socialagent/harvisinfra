import React from "react";
import "../Styles/Services.css";

const Services = () => {
  return (
    <div className="services_section dot_section">
      <div className="section_heading">
        <h3>Our Services.</h3>
      </div>
      <div className="services">
        <div className="product_card">
          <img src={require("../assets/photos/roadinfra.jpg")} alt="" />
          <div className="foreground">
            <div className="product_title">RoadInfra</div>
            <div className="product_desc">
              <div className="item_title">Bitumen</div>
              <div className="item_desc">
                Bitumen is a black, sticky, and highly viscous material that is
                a naturally occurring substance. It is primarily composed of
                hydrocarbons and is found in petroleum deposits. It is a key
                component in the development of infrastructure projects,
                particularly in the construction of roads and highways.
              </div>
              <div className="item_btn">
                <a href="/roadinfra">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
