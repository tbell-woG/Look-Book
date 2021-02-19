import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        // <body style={{backgroundImage: "url('https://i.ibb.co/LCQR6NZ/marble.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "auto"}}>
            <div className="container">
                <br />
                <br />
                    {/* Title */}
                            <div className="page-content text-center">
                                <h1 style={{ fontFamily: "'Libre Baskerville', serif", fontColor: "white", letterSpacing: "20px", textAlign: "center" }}> L O O K-B O O K. </h1>
                            </div>
                            {/* Home page content */}
                            <br />
                            <br />
                            {/* Home page content */}
                            <div className="thinker-image" style={{ float: "left", paddingRight: "1px" }}>
                                <img src="https://i.ibb.co/Kzr4y96/kisspng-the-thinker-sculpture-drawing-masterpiece-5b3e0da0037481-6351671215307933760142.png"
                                    alt="kisspng-the-thinker-sculpture-drawing-masterpiece" width="350" />
                            </div>
                            <br />

                            <div class="transbox" style={{margin: "20px", backgroundColor: "rgba(255,255,255,0.5)", border: "2px solid black", marginLeft: "425px", width: "500px", backgroundImage: "url('https://i.ibb.co/LCQR6NZ/marble.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "auto"}}>
                                <br/>
                                <div className="boxed" style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "28px", fontStyle: "italic", marginLeft: "65px" }}>
                                    An art museum at your fingertips.
                                    </div>
                                <br />
                                {/* Enter button takes user to Login page from Home page */}
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <Link to="/login">
                                        <button className="btn btn-dark" type="button" style={{ fontFamily: "'Libre Baskerville', serif", fontStyle: "italic", marginLeft: "65px" }}>
                                            E N T E R </button>
                                    </Link>
                                </div>
                                <br/>
                            </div>
            </div>
        // </body>
    )
}

export default Home;