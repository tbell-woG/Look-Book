// Container component for log in
import React from "react";
import { Link } from "react-dom"
import "./style.css";

function Container () {
    return (
        <div className="card border-dark">
            <div className="card-header">
            <h4>
                LOG IN WITH YOUR EMAIL
            </h4>
            </div>
            <label>Email
                <input type="email" placeholder="Enter Email"></input>
            </label>
            <label>Password
                <input type="password" placeholder="Enter Password"></input>
            </label>
            <div className="button-group align-center">
                {/* Will need to use Link once pages are set up in pages folder */}
                <a href="#" className="button">L O G  I N</a>
            </div>
        </div>
    )
};

export default Container;