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
            <label>First Name
                <input type="firstName" placeholder="Enter First Name"></input>
            </label>
            <label>Last Name
                <input type="lastName" placeholder="Enter Last Name"></input>
            </label>
            <label>Email
                <input type="email" placeholder="Enter Email"></input>
            </label>
            <label>Password
                <input type="password" placeholder="Enter Password"></input>
            </label>
            <label>Repeat Password
                <input type="repeatPassword" placeholder="Repeat Password"></input>
            </label>
            <div className="button-group align-center">
                {/* Will need to use Link once pages are set up in pages folder */}
                <a href="#" className="button">SIGNUP</a>
            </div>
        </div>
    )
};

export default Form;