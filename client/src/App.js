import React, { Component } from "react";
import logo from "./logo.svg";
import Art from "./pages/Art"
import Favorites from "./pages/Favorites"
import "./App.css";
import API from "./utils/API"


class App extends Component {

  render() {
    return (
      <div>
        <Art />
        <Favorites />
      </div>
    );
  }
}

export default App;
