import React from "react";
import "./App.css";
import { Layout } from "antd";
import Navbar from "./components/Navbar";
import profilePic from "./images/profile_pic.jpg";
import project1 from "./images/project_1.png";
import project2 from "./images/project_2.png";
import project3 from "./images/project_3.png";

function App() {
  return (
    <Layout className="App">
      <Navbar />
      <Layout.Content className="Content">
        <div className="splash-section">
          {`Welcome!\nIt's pretty simple.\nI love making web apps.`}
        </div>
        <div id="about">
          <img
            className="profile-pic"
            src={profilePic}
            alt="abraham lara granados"
            draggable="false"
          />
          <div className="paragraphs">
            <div>
              My name is <span className="name">Abraham Lara Granados</span>. I
              enjoy working on developing web apps as well as improving my
              design skills.
            </div>
            <div>
              I like to focus on full-stack web development because I have an
              interest in understanding what goes into developing different
              types of websites.
            </div>
            <div>
              Aside from programming I enjoy playing video games and volleyball.
              I used to enjoy drawing as a kid and I feel like that had some
              influence in what I do now.
            </div>
          </div>
        </div>
        <div id="projects">
          <div className="main-sub">
            <div className="sub-header">
              Here are a few projects I've worked on
            </div>
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
      </Layout.Content>
    </Layout>
  );
}

export default App;
