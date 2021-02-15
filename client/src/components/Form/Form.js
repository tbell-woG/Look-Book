import React from "react";
import { Link } from "react-dom"
import "./style.css";

function Form () {
    return (
        <div className="card border-dark">
            <div className="card-header">
            <h4>
                Sign up for Look-Book
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
                <a href="#" className="button">SIGNUP</a>
            </div>
        </div>
    )
};

export default Form;