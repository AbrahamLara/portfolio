import React from "react";
import "../css/Navbar.css";
import { Layout } from "antd";

export default class Navbar extends React.Component {
  render() {
    return (
      <Layout.Header className="Navbar">
        <span className="title">
          <a href="/">MySite</a>
        </span>
        <ul className="links">
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
        </ul>
      </Layout.Header>
    );
  }
}
