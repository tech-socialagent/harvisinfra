import React from "react";
import { Link } from "react-router-dom";
import "../Styles/About.css";

const About = () => {
  return (
    <div className="about_section dot_section" id="about">
      <div className="about_text">
        <div className="section_heading">
          <h3>About Us.</h3>
        </div> 
        <div className="about_desc">
          <p>
            HARVIS is a trading and a multi-domain infrastructure project
            development firm. Our project significance focuses on road
            transportation engineering projects, which include the building and
            maintenance of roads, highways, flyovers, and bridges as required by
            the projects. We specialize in providing innovative solutions for
            businesses and organizations in a variety of industries.
          </p>
          <p>
            Our trading division deals in a wide range of products and services,
            including commodities, energy, and industrial goods. We have a team
            of experts who have extensive knowledge and experience in the global
            market, ensuring that our clients get the best deals and prices.
          </p>
        </div>
        <Link to={"/about_us"} className="main_btn2">Read More</Link>
      </div>
      <div className="about_slider"></div>
    </div>
  );
};

export default About;
