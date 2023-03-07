import React from "react";
import "./projects.css";
import Card from "../components/card/Card";
import data from "./data";

const Projects = () => {
  return (
    <section id="projects">
      <p className="section-heading">projects</p>
      <p className="project-desc">
        A small gallery of recent projects chosen by me.
      </p>
      <div className="card-container">
        {data.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            description={card.description}
            stack={card.stack}
            live={card.live}
            github={card.github}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
