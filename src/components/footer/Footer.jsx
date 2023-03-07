import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <a href="mailto:rohit.tiwari968@gmail.com">rohit.tiwari968@gmail.com</a>
      <a href="tel:+919148938715">(+91)-9148938715</a>
      <div className="social-icons">
        <div className="icon social-icon">
          <a href="https://github.com/rohit968">
            <IoLogoGithub />
          </a>
        </div>
        <div className="icon social-icon">
          <a href="https://www.linkedin.com/in/rohittiwari968/">
            <IoLogoLinkedin />
          </a>
        </div>
        <div className="icon social-icon">
          <IoLogoInstagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
