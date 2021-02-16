import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "foundation-sites/dist/css/foundation.css";
// Will have to use LINK from react-router-dom
import logo from "./logo.svg";
import "./App.css";
import Art from "./pages/Art";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Container from "./components/Container/Container";
import Form from "./components/Form/Form";
import Reflect from "./components/Reflect/Reflect"
import API from "./utils/API"

class App extends Component {

  render() {
    return (
      <div>
        <Art />
        <Favorites />
        <Navbar />
        <Card />
        <Container />
        <Form />
        <Reflect />
      </div>
    );
  }
}

export default App;
