import "../Styles/Location.css";

const Location = () => {
  return (
    <div className="location_section" id="location">
      <div className="location_data">
        <h3>HARVIS INFRA</h3>
        <p>
          62, LEVEL, 4, S, KARIAPPA RD, BASAVANAGUDI, BERNGALURU, KARNATAKA
          560004, INDIA
        </p>
        <div className="loc_btns">
        <a href="tel:+918040356827" className="main_btn2">Contact Us</a>
        <a href="mailto:harviisinfra@gmail.com" className="main_btn2">Mail Us</a>
        </div>
      </div>
      <div className="location_map">
        <iframe
          title="map1"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d917.5665026525667!2d77.57443727625898!3d12.939109040456858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15923cab2abb%3A0x799ccfdcb45f59bb!2sHARVIS!5e0!3m2!1sen!2sin!4v1677740607155!5m2!1sen!2sin"
          width="100%"
          height="410"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
