import React from "react";
import "../css/Projects.css";
import project1 from "../images/project_1.png";
import project2 from "../images/project_2.png";
import project3 from "../images/project_3.png";

export default function Projects() {
  return (
    <div className="Projects">
      <div className="main-sub">
        <div className="sub-header">Here are a few projects I've worked on</div>
        <div className="previews">
          <a href="https://github.com/AbrahamLara/superhero-search">
            <img src={project1} alt="super-hero-search" />
          </a>
          <a href="https://github.com/AbrahamLara/Would-You-Rather">
            <img src={project2} alt="would-you-rather" />
          </a>
          <a href="https://github.com/AbrahamLara/MyReads">
            <img src={project3} alt="my-reads" />
          </a>
        </div>
        <div className="more-info">
          Checkout other projects I've created on{" "}
          <a className="name" href="https://github.com/AbrahamLara">
            GitHub
          </a>
          .
        </div>
        <div className="more-info">
          You can reach out to me on{" "}
          <a
            className="name"
            href="https://www.linkedin.com/in/abraham-lara-granados/"
          >
            LinkedIn
          </a>
          .
        </div>
      </div>
    </div>
  );
}
