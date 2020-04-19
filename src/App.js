import React from "react";
import "./App.css";
import { Layout } from "antd";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Layout>
      <Navbar />
      <Layout.Content></Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
  );
}

export default App;
