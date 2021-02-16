import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "foundation-sites/dist/css/foundation.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar/Navbar"; 
import logo from "./logo.svg";
import "./App.css";
import API from "./utils/API"

class App extends Component {

  render() {
    return (
      <Router>
      <div>
        <Navbar />
        {/* Will need to import home page from Tamira */}
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/favorites" component={Favorites} />
      </div>
      </Router>
    );
  }
}

export default App;
