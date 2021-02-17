import React from "react";
import "./style.css";

function Form () {
    return (
        <div className="card border-dark">
            <div className="card-header">
            <h4>
                Sign up for <i>Look-Book</i></h4>
            </div>
            <label>First Name
                <input type="password" placeholder="Enter Password"></input>
            </label>
            <label>Last Name
                <input type="password" placeholder="Enter Last Name"></input>
            </label>
            <label>Email
                <input type="email" placeholder="Enter Email"></input>
            </label>
            <label>Password
                <input type="password" placeholder="Enter Password"></input>
            </label>
            <label>Repeat Password
                <input type="password" placeholder="Repeat Password"></input>
            </label>
            <div className="button-group align-center">
                {/* Will need to use Link once pages are set up in pages folder */}
                <a href="#" className="button">SIGNUP</a>
            </div>
        </div>
    )
};

export default Form;