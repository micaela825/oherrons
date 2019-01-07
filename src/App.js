import React, { Component } from "react";
import "./style.css";
import NavBar from "./components/NavBar";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
