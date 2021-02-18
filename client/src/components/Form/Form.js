import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Form() {
    return (
        <div className="card border-dark">
            <div className="card-header">
                <h4>
                    SIGN UP FOR LOOKBOOK</h4>
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
            {/* Link to Search page */}
            <Link to="/search">
                <div className="d-flex justify-content-center">
                <button className="btn btn-dark align-content-center" type="button">
                    START SEARCHING!
                    </button>
                </div>
            </Link>
        </div>
    )
};

export default Form;