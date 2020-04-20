import React from "react";
import "../css/Navbar.css";
import { Layout } from "antd";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <Layout.Header className="Navbar">
        <span className="title">
          <Link to="/">MySite</Link>
        </span>
        <ul className="links">
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
        </ul>
      </Layout.Header>
    );
  }
}
