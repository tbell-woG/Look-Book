import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container">
            <body>
                {/* Title */}
                <section>
                    <div className="container">
                        <div className="page-content text-center">
                            <h1> LOOK-BOOK. </h1>
                            {/* Home page content */}
                            <div className="thinker-image" style={{ float: "left" }}>
                                <img src="https://i.ibb.co/Kzr4y96/kisspng-the-thinker-sculpture-drawing-masterpiece-5b3e0da0037481-6351671215307933760142.png"
                                    alt="kisspng-the-thinker-sculpture-drawing-masterpiece" width="350" />
                            </div>
                            <div className="boxed">
                                An art museum at your fingertips.
                            </div>
                            
                            {/* Enter button takes user to Login page from Home page */}
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <Link to="/login">
                                <button className="btn btn-dark" type="button">
                                E N T E R </button> 
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </body>
        </div>
    )
}

export default Home;