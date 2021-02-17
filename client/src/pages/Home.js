import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container">
            <body>
                {/* Title */}
                <section>
                    <div className="container">
                        <div>
                            <br/>
                            <br/>
                            <h1 style={{ fontFamily: "'Libre Baskerville', serif", letterSpacing: "40px", textAlign: "center" }}> LOOK-BOOK. </h1>
                            {/* Home page content */}
                            <br/>
                            <br/>
                            <div className="thinker-image" style={{ float: "left", paddingRight: "1px"}}>
                                <img src="https://i.ibb.co/Kzr4y96/kisspng-the-thinker-sculpture-drawing-masterpiece-5b3e0da0037481-6351671215307933760142.png"
                                    alt="kisspng-the-thinker-sculpture-drawing-masterpiece" width="350" />
                            </div>
                            <br/>
                            <div className="boxed" style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "25px", fontStyle: "italic", marginLeft: "400px"}}>
                                An art gallery at your fingertips.
                            </div>
                            <br/>
                            <br/>

                            {/* Enter button takes user to Login page from Home page */}
                                <Link to="/login">
                                    <button className="btn btn-dark" type="button" style={{ fontFamily: "'Libre Baskerville', serif", fontStyle: "italic", marginLeft: "165px"}}>
                                        E N T E R </button>
                                </Link>
                        </div>
                    </div>
                </section>
            </body>
        </div>
    )
}

export default Home;