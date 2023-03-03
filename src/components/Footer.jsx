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
          <a href="/">About Us</a>

          <h4>
            <a href="">CONTACT US</a>
          </h4>
          <h4>
            <a href="">GET QUOTE</a>
          </h4>
        </div>
        <div>
          <h4>PRODUCTS</h4>
          <a href="/">Bitumen</a>
          <a href="/">Emulsion</a>
          <a href="/">Steel</a>
          <a href="/">Cement</a>
          <a href="/">Petroleum</a>
        </div>
        <div>
          <h4>SERVICES</h4>
          <a href="/">Road Infra</a>
        </div>
        <div>
          <h4>SOCIAL MEDIA LINKS</h4>
        </div>
      </div>
      <div className="ft_bottom">
        <div className="ft_copy">
          <h5>Harvis &copy; 2023 All Right Reserved.</h5>
          <div>
            <a href="">Terms of Use</a>
            <a href="">Privacy Policy</a>
          </div>
        </div>
        <div className="ft_flo"></div>
      </div>
    </div>
  );
};

export default Footer;
