// Tamira and I will have to render the Home Page here along the lines of the wireframe
import React from "react";
import "foundation-sites/dist/css/foundation.css";


function About() {
    return (
        <div>
            <div className="card" style={{backgroundColor: "rgb(201, 201, 201)"}}>
                <div className="card-header">
                    <h4 style={{ fontFamily: "'Libre Baskerville', serif", letterSpacing: "7px", textAlign: "center", fontStyle: "italic" }}>ABOUT LOOK-BOOK</h4>
                </div>
                <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "20px" }}>Welcome to <i>Look-Book</i>, an open space where you can view art from all periods of time, from all
                groups of people. <i>Look-Book</i> is much more than an app for swiping famous pieces of art. Instead, it is a personal journalling application where you are encouraged to reflect on a piece of art that you find appealing. Recent studies have consistently proven the benefit of viewing art and reflecting on its significance to individuals and communities. This is a key function of museums and other cultural institutions. <i>Look-Book</i> makes this function available to you on your mobile device.
                    {/* <p>Click below to log in or sign up for the application.</p> */}
                </p>
            </div>
        </div>
    )
};

export default About;