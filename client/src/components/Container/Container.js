// Container component for log in
import React from "react";
import { Link } from "react-dom"
import "./style.css";

function Container () {
    return (
        <div className="card border-dark">
            <div className="card-header">
            <h4>
                Log in with your email account
            </h4>
            </div>
            <label>Email
                <input type="email" placeholder="please enter your email address here"></input>
            </label>
            <label>Password
                <input type="password" placeholder="please enter your password here"></input>
            </label>
            <div className="button-group align-center">
                {/* Will need to use Link once pages are set up in pages folder */}
                <a href="#" className="button">LOGIN</a>
            </div>
        </div>
    )
};

export default Container;