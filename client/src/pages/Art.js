import React, { useState, useEffect } from "react"
import API from "../utils/API"

function Art() {
    const [art, setArt] = useState([])

    useEffect(() => {
        API.getArtFromMuseum()
            .then(res => {
                console.log('Attempting to Get Art From Museum')
                console.log(`This is the Response--->${res}`)

                setArt(res.data.artObjects)
                console.log(`This is Art---> ${art}`)
            })
    }, [])



    const artCardMap = art.map((el, index) => {
        console.log(el)
        console.log(index)
        console.log(`This is the Art card Map----> ${artCardMap}`)
        return (
            <h1>{el.title}</h1>
            )
        })


    return (
                <div>

                    Welcome To The Art Page

                    Check out our Sweet Titles

            {artCardMap}


            {/* <div className="card" style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div> */}




                </div>
    )
}

export default Art