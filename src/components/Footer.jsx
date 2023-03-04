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
          <a href="/bitumen">Bitumen</a>
          <a href="/emulsion">Emulsion</a>
          <a href="/steel">Steel</a>
          <a href="/cement">Cement</a>
          <a href="/petroleum">Petroleum</a>
        </div>
        <div>
          <h4>SERVICES</h4>
          <a href="/roadinfra">Road Infra</a>
        </div>
        <div>
          <h4>SOCIAL MEDIA LINKS</h4>
        </div>
      </div>
      <div className="ft_bottom">
        <div className="ft_copy">
          <h5>Harvis &copy; 2023 All Right Reserved.</h5>
          <div>
            <a href="/termsandcondition">Terms of Use</a>
            <a href="/privacypolicy">Privacy Policy</a>
          </div>
        </div>
        <div className="ft_flo"></div>
      </div>
    </div>
  );
};

export default Footer;
