// Container component for log in
import React from "react";
import { Link } from "react-router-dom"
import "./style.css";

function Container() {
    return (
        <div className="card border-dark">
            <div className="card-header">
                <h4>
                    LOG IN WITH YOUR EMAIL ACCOUNT
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
                <a href="#" className="button">LOG IN</a>
            </div>
            {/* Link to signup page */}
            <div className="button-group align-center">
                <Link to="/signup">
                    New to Look-Book? Sign up here
                </Link>
            </div>

        </div>
    )
};

export default Container;