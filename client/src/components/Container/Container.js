// Container component for log in
import React from "react";
import { Link } from "react-router-dom"
import "./style.css";

function Container() {
    return (
        <div className="card border-dark">
            <div className="card-header">
            <h4>
                LOG IN WITH YOUR EMAIL
            </h4>
            </div>
            <br/>
            <label>Email
                <input type="email" placeholder="Enter Email"></input>
            </label>
            <label>Password
                <input type="password" placeholder="Enter Password"></input>
            </label>
            <br/>
            <div className="button-group align-center">
                {/* Will need to use Link once pages are set up in pages folder */}
                <a href="/search" className="button">L O G  I N</a>
            </div>
            {/* Link to signup page */}
            <div className="button-group align-center" style={{ fontFamily: "'Libre Baskerville', serif", textAlign: "center" }}>
                <Link to="/signup">
                    New to Look-Book? Sign up here
                </Link>
            </div>
            <br/>
        </div>
    )
};

export default Container;