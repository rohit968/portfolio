import React from "react";
import "./card.css";

const Card = ({ title, image, description, stack, live, github }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <p className="card-stack">Stack: {stack}</p>
        <div className="card-links">
          <a href={live}>Live</a>
          <a href={github}>Github</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
