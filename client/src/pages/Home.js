import React from "react";
import Navbar from "../components/Navbar/Navbar";


function Home() {
    return (
        <div>
            <Navbar />
            <body>
                {/* Page Spacing */}
                <br/>
                <br/>
                <br/>

                {/* Side vertical title */}
                <div class="container-fluid">
                    <a class="vertical-logo">LOOKBOOK.</a>
                </div>

                {/* Title */}
                <section>
                    <div class="container">
                        <div class="page-content text-center">
                            <h1> LOOKBOOK. </h1>
                            <br/>
                            <br/>
                            <br/>

                            {/* Home page content */}
                            <div class="thinker-image" style="float:left;">
                                <img src="https://i.ibb.co/Kzr4y96/kisspng-the-thinker-sculpture-drawing-masterpiece-5b3e0da0037481-6351671215307933760142.png"
                                    alt="kisspng-the-thinker-sculpture-drawing-masterpiece" width="" />
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <div class="boxed">
                                An art museum at your fingertips.
                            </div>
                            <br/>


                        </div>
                    </div>
                </section>
            </body>
        </div>
    )
}

export default Home;