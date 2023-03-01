import React from "react";
import "../Styles/Home.css";
import BannerVdo from "../assets/Harvis video.mp4";

const Home = () => {
  return (
    <div className="home_section">
      <video autoPlay loop muted id="vdo_file" className="banner_vdo">
        <source src={BannerVdo} type="video/mp4" className="vdo" />
      </video>
      <div className="banner_title">
        <h2 className="home_title">You Dream It. We Build It.</h2>
        <div className="main_btn1">Know More</div>
      </div>
    </div>
  );
};

export default Home;
