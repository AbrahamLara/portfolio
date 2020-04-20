import React from "react";
import "./App.css";
import { Layout } from "antd";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <Layout className="App">
      <Navbar />
      <Layout.Content className="Content">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </Layout.Content>
    </Layout>
  );
}

export default App;
