import React from "react";
import { Link } from "react-router-dom";
import "./herosection.css";
import { BsArrowRight } from "react-icons/bs";

const HeroSection = () => {
  return (
    <main role="main" className="hero-section">
      <div className="hero-container">
        <h4 className="hero-caption">full stack web developer</h4>
        <h1 className="hero-text">Rohit Tiwari</h1>
        <p className="hero-description">
          Hi There! I'm Rohit, a Front-End Developer. The main characteristic of
          my work ine could give has been simple: «‎Get done. Fast». I looking
          for interesting projects and this is my portfolio.
        </p>
        <div className="main-links">
          <div className="btn">
            <Link to="/projects" className="link">
              Projects
            </Link>
            <BsArrowRight className="btn-arrow" />
          </div>
          <div className="btn">
            <Link to="/contact" className="link">
              Contact
            </Link>
            <BsArrowRight className="btn-arrow" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
