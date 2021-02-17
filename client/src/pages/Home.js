import React from "react";

function Home() {
    return (
        <div className="container">
            <body>
                {/* Page Spacing */}
                {/* <br/>
                <br/>
                <br/> */}

                {/* Side vertical title
                <div className="container-fluid">
                    <a className="vertical-logo">LOOKBOOK.</a>
                </div> */}

                {/* Title */}
                <section>
                    <div className="container">
                        <div className="page-content text-center">
                            <h1> LOOKBOOK. </h1>
                            {/* <br/>
                            <br/>
                            <br/> */}

                            {/* Home page content */}
                            <div className="thinker-image" style={{float:"left"}}>
                                <img src="https://i.ibb.co/Kzr4y96/kisspng-the-thinker-sculpture-drawing-masterpiece-5b3e0da0037481-6351671215307933760142.png"
                                    alt="kisspng-the-thinker-sculpture-drawing-masterpiece" width="350" />
                            </div>
                            {/* <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/> */}
                            <div className="boxed">
                                An art museum at your fingertips.
                            </div>
                            {/* <br/> */}
                        </div>
                    </div>
                </section>
            </body>
        </div>
    )
}

export default Home;