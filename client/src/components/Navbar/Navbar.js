// Navbar component. 
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm">
            <div class="logo">
                <img src="https://i.ibb.co/Kzr4y96/kisspng-the-thinker-sculpture-drawing-masterpiece-5b3e0da0037481-6351671215307933760142.png"
                    alt="kisspng-the-thinker-sculpture-drawing-masterpiece" width="50" />
            </div>
            <ul className="navbar-nav justify-content">
                <li className="nav-item">
                    {/* Adding links to different pages in navbar using React Link */}
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
                    className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
                    >
                        ABOUT 
                    </Link>
                </li>
                <li className="nav-item">
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
                </li>
                <li className="nav-item">
                    <Link 
                    to="/search"
                    className={window.location.pathname === "/favorites" ? "nav-link active" : "nav-link"}
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
        </nav>
    );
}

export default Navbar;