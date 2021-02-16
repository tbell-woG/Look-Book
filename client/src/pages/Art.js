import React, { useState, useEffect } from "react"
import API from "../utils/API"

function Art() {
    const [art, setArt] = useState([])

    useEffect(() => {
        API.getArtFromMuseum()
            .then(res => {
                console.log('Attempting to Get Art From Museum')
                console.log("under me is the res")
                console.log(res)

                setArt(res.data.artObjects)
            })
    }, [])


    return (
        <div>

            Welcome To The Art Page

            Check out our Sweet Titles

            {art.map((el) => (
                // const title = el.title
                // console.log('BELOW IS THE TITLE')
                // console.log(title)
                // const maker = el.principalOrFirstMaker
                // console.log('Below is the Author')
                // console.log(maker)
                // const img = art[0].webImage.url
                // console.log("Below is the Img Tag")
                // console.log(img)
                
                <div className="card" style={{ width: "18rem" }}>
                <img src={el.webImage.url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title: {el.title}</h5>
                    <p className="card-text">Author: {el.principalOrFirstMaker}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            ))}

            {/* {art.length ? (
                //map over data and make a card element      
                <div className="card" style={{ width: "18rem" }}>
                    <img src={art[0].webImage.url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title: {artCardMap}</h5>
                        <p className="card-text">Author: {artCardMaker}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            ) : <h1>Loading</h1>} */}
        </div>
    )
}

export default Art