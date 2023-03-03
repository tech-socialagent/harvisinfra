import React from "react";
import "../Styles/OurProducts.css";

const OurProducts = () => {
  return (
    <div className="our_products_section">
      <div className="flo_art2"></div>
      <div className="section_header">
        <h3>Our Products.</h3>
        <div className="sec_desc">
          Quality. Safety. Reliability. Every time.
        </div>
      </div>
      <div className="product_items">
        <div className="product_card">
          <img src={require("../assets/photos/bitumen.jpeg")} alt="" />
          <div className="foreground">
            <div className="product_title">Bitumen</div>
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
                <a href="/bitumen">Read more</a>
              </div>
            </div>
          </div>
        </div>
        <div className="product_card">
          <img src={require("../assets/photos/Emulsion.jpg")} alt="" />
          <div className="foreground">
            <div className="product_title">Emulsion</div>
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
                <a href="/emulsion">Read more</a>
              </div>
            </div>
          </div>
        </div>
        <div className="product_card">
          <img src={require("../assets/photos/steel.jpg")} alt="" />
          <div className="foreground">
            <div className="product_title">Steel</div>
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
                <a href="/steel">Read more</a>
              </div>
            </div>
          </div>
        </div>
        <div className="product_card">
          <img src={require("../assets/photos/cement.jpg")} alt="" />
          <div className="foreground">
            <div className="product_title">Cement</div>
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
                <a href="/cement">Read more</a>
              </div>
            </div>
          </div>
        </div>
        <div className="product_card">
          <img src={require("../assets/photos/petroleum.jpg")} alt="" />
          <div className="foreground">
            <div className="product_title">Petroleum</div>
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
                <a href="/petroleum">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
