import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Form() {
    return (
        <div className="card border-dark">
            <div className="card-header">
                <h4>
                    SIGN UP FOR LOOKBOOK
                </h4>
            </div>
            <br/>
            {/* First and Last Name inputs are not hidden */}
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
            <br/>
            {/* Link to Search page */}
            <Link to="/search">
                <div className="d-flex justify-content-center">
                <button className="btn btn-dark align-content-center" type="button" style={{ fontFamily: "'Libre Baskerville', serif", fontStyle: "italic", fontSize: "14px" }}>
                    S T A R T &nbsp;  S E A R C H I N G
                    </button>
                </div>
            </Link>
            <br/>
        </div>
    )
};

export default Form;