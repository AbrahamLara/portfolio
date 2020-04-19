import React from "react";
import "./App.css";
import { Layout } from "antd";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Layout className="App">
      <Navbar />
      <Layout.Content className="Content">
        <div id="about">
          {`Welcome!\nIt's pretty simple.\nI love making web apps.`}
        </div>
      </Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
  );
}

export default App;
