import React from "react";
import "../css/About.css";
import profilePic from "../images/profile_pic.jpg";

export default function About() {
  return (
    <div className="About">
      <img
        className="profile-pic"
        src={profilePic}
        alt="abraham lara granados"
        draggable="false"
      />
      <div className="paragraphs">
        <div>
          My name is <span className="name">Abraham Lara Granados</span>. I
          enjoy working on developing web apps as well as improving my design
          skills.
        </div>
        <div>
          I like to focus on full-stack web development because I have an
          interest in understanding what goes into developing different types of
          websites.
        </div>
        <div>
          Aside from programming I enjoy playing video games and volleyball. I
          used to enjoy drawing as a kid and I feel like that had some influence
          in what I do now.
        </div>
      </div>
    </div>
  );
}
