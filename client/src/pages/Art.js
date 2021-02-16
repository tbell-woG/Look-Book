import React, { useState, useEffect } from "react";
import API from "../utils/API";

function Art() {
    const [art, setArt] = useState([])
    const [index, setIndex] = useState(0)

    useEffect(() => {
        API.getArtFromMuseum()
            .then(res => {
                console.log('Attempting to Get Art From Museum')
                console.log("under me is the res")
                console.log(res)

                setArt(res.data.artObjects)
                // create random number
                const index = Math.floor(Math.random() * 6)
                setIndex(index)
                // set index to random number

            })
    }, [])

    return (
        <div>
            Welcome To The Art Page

            Check out our Sweet Titles
            {art.length ? (
                //map over data and make a card element
                // select a random number between 1 and 6

                <div className="card" style={{ width: "18rem" }}>
                    <img src={art[index].webImage.url} className="card-img-top" alt="Picture coming from the art database" />
                    <div className="card-body">
                        <h5 className="card-title">Card title: {art[index].title}</h5>
                        <p className="card-text">Author: {art[index].principalOrFirstMaker}</p>
                        <a href="#" className="btn btn-primary">Vote No</a>
                        <a href="#" className="btn btn-primary">Vote Yes</a>

                    </div>
                </div>
            ) : <h1>Loading</h1>}
        </div>
    )
}

export default Art