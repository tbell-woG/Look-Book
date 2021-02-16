import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "foundation-sites/dist/css/foundation.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Art from "./pages/Art";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar/Navbar"; 
import logo from "./logo.svg";
import "./App.css";
<<<<<<< HEAD
=======
import Art from "./pages/Art";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Container from "./components/Container/Container";
import Form from "./components/Form/Form";
import Reflect from "./components/Reflect/Reflect"
>>>>>>> 5cf05fc95d5f1f8a3d340e592c70a8a262900905
import API from "./utils/API"

class App extends Component {

  render() {
    return (
      <Router>
      <div>
<<<<<<< HEAD
=======
        <Art />
        <Favorites />
>>>>>>> 5cf05fc95d5f1f8a3d340e592c70a8a262900905
        <Navbar />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/search" component={Art} />
          <Route exact path="/favorites" component={Favorites} />
      </div>
      </Router>
    );
  }
}

export default App;
