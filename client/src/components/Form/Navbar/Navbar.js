// Navbar component. 
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// function for clicking hamburger in mobile format
function onMenuToggle(e) {
    const menuContent = document.getElementById("menu-content");
    console.log(menuContent.classList)
    menuContent.classList.toggle("show")
}

function Navbar() {
    return (
        <body >
            <nav className="navbar navbar-expand-sm navbar-light lb-navbar">
                <div className="container-fluid" style={{backgroundColor: "white"}}>
                    <div className="navbar-brand">
                        <img src="https://i.ibb.co/Kzr4y96/kisspng-the-thinker-sculpture-drawing-masterpiece-5b3e0da0037481-6351671215307933760142.png"
                            alt="kisspng-the-thinker-sculpture-drawing-masterpiece" width="50" />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" onClick={onMenuToggle}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="menu-content">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                                >
                                    HOME
                        </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/about"
                                    className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                                >
                                    ABOUT
                        </Link>
                            </li>
                            {/* <li className="nav-item">
                        <Link
                        to="/signup"
                        className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
                        >
                            SIGN UP 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                        to="/login"
                        className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
                        >
                            LOG IN  
                        </Link>
                    </li> */}
                            <li className="nav-item">
                                <Link
                                    to="/search"
                                    className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                                >
                                    SEARCH
                        </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/favorites"
                                    className={window.location.pathname === "/favorites" ? "nav-link active" : "nav-link"}
                                >
                                    FAVORITES
                        </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </body>
    );
}

export default Navbar;