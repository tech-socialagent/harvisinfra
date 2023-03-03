import React from "react";
import "../Styles/GetQuote.css";
import { Link } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";

const Getquote = () => {
  return (
    <div className="getquote_body dot_section">
      <div className="top">
        <div className="section_heading">
          <h3>Request A Quote.</h3>
        </div>
        <div className="top_desc">
          Harvis is your ideal solution for obtaining the components you
          require, with an resilient supply chain and virtually limitless
          production capacity.
        </div>
      </div>
      <div className="bottom">
        {/* <div className="section_body"> */}
          <div className="quote_image">
            <img src={require("../assets/photos/quote.jpg")} alt="" />
          </div>
          <div className="quote_form">
            <div className="form_title">Let's Talk .</div>
            <input
              type="text"
              name=""
              id="name"
              placeholder="Hey, tell us your name"
            />
            <input
              type="text"
              name=""
              id="email"
              placeholder="What's your mail is"
            />
            <input type="text" name="" id="number" placeholder="Your number" />
            <input
              type="text"
              name=""
              id="copany_name"
              placeholder="Company name"
            />
            <input
              type="text"
              name=""
              id="project_detail"
              placeholder="Describe your requirement"
            />
            <div className="form_agreement">
              By submitting this form I consent to processing my personal data
              as described in the 
              <Link className="form_privacy" to={"/privacy"}>
                Privacy Policy
              </Link>
              .
            </div>
            <div className="form_submit">
            <div className="main_btn2">Submit</div>

            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Getquote;
