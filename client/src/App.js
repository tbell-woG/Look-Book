import React, { Component } from "react";
import logo from "./logo.svg";
import Art from "./pages/Art"
import "./App.css";
import API from "./utils/API"


class App extends Component {

  render() {
    return (
      <div>
        <Art />
      </div>
    );
  }
}

export default App;
