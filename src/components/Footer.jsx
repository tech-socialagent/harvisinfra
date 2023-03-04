import { Link } from "react-router-dom";
import Facebook from "../assets/Icons/facebook.png";
import Instagram from "../assets/Icons/IG.png";
import LinkedIn from "../assets/Icons/LinkedIn.png";
import Twitter from "../assets/Icons/Twitter.png";
import Youtube from "../assets/Icons/youtube.png";

import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div className="app_footer">
      <div className="ft_top">
        <div>
          <img src={require("../assets/photos/Harvis logo 1.png")} alt="" />
        </div>
        <div>
          <h4>COMPANY</h4>
          <a href="/about_us">About Us</a>

          <h4>
            <a href="/">CONTACT US</a>
          </h4>
          <h4>
            <a href="/getquote">GET QUOTE</a>
          </h4>
        </div>
        <div>
          <h4>PRODUCTS</h4>
          <Link to={"/bitumen"}>Bitumen</Link>
          <Link to={"/emulsion"}>Emulsion</Link>
          <Link to={"/steel"}>Steel</Link>
          <Link to={"/cement"}>Cement</Link>
          <Link to={"/petroleum"}>Petroleum</Link>
        </div>
        <div>
          <h4>SERVICES</h4>
          <Link to={"/roadinfra"}>Road Infra</Link>
        </div>
        <div>
          <h4>SOCIAL MEDIA LINKS</h4>
          <div className="mediaicons">
          <a href="http://" target="_blank" rel="noopener noreferrer"><img src={Youtube} alt="" /></a>
          <a href="http://" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="" /></a>
          <a href="http://" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="" /></a>
          <a href="http://" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt="" /></a>
          <a href="http://" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="" /></a>
          </div>
        </div>
      </div>
      <div className="ft_bottom">
        <div className="ft_copy">
          <h5>Harvis &copy; 2023 All Right Reserved.</h5>
          <div>
            <Link to={"/termsandcondition"}>Terms of Use</Link>
            <Link to={"/privacypolicy"}>Privacy Policy</Link>
          </div>  
        </div>
        <div className="ft_flo"></div>
      </div>
    </div>
  );
};

export default Footer;
