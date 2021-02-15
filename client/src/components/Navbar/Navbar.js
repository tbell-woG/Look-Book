// Navbar component. Displays in App.js
// Will need to display links using Link 
import React from "react";
import "./style.css";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm">
            {/* Logo will be in the Navbar */}
            <div class="logo">
                <img src="https://i.ibb.co/Kzr4y96/kisspng-the-thinker-sculpture-drawing-masterpiece-5b3e0da0037481-6351671215307933760142.png"
                    alt="kisspng-the-thinker-sculpture-drawing-masterpiece" width="50" />
            </div>
            <ul className="navbar-nav justify-content">
                {/* items will need to display responsively */}
                <li className="nav-item">
                    {/* react Link will go to each of the react pages of app. See Pupster example */}
                    <h4>HOME</h4>
                </li>
                <li className="nav-item">
                    <h4>ABOUT</h4>
                </li>
                <li className="nav-item">
                    <h4>SIGN IN</h4>
                </li>
                <li className="nav-item">
                    <h4>LOG IN</h4>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;