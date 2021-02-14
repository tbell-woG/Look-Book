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



    const artCardMap = art.map((el, index) => {
        console.log(el)
        console.log(index)
        const title = el.title
        const maker = el.principalOrFirstMaker
        console.log(`This is the Title ---> ${title}`)
        console.log(`This is the maker ${maker}`)
        return (
            <div>
                <h1>{title}</h1>
                {/* <h1>{maker}</h1> */}
            </div>


        )
    })


    const artCardMaker = art.map((el, index) => {
        console.log(el)
        console.log(index)
        const maker = el.principalOrFirstMaker
        const title = el.title
        console.log(`This should be the IMAGE --->${el.webImage.url}`)
        console.log(`This is the Title ---> ${title}`)
        console.log(`This is the maker ${maker}`)
        return (
            <div>
                <h1>{maker}</h1>
                {/* <h1>{maker}</h1> */}
            </div>


        )
    })

    const artCardImage = art.map((el, index) => {
        console.log(el)
        console.log(index)
        const maker = el.principalOrFirstMaker
        const title = el.title
        console.log(`This should be the IMAGE --->${el.webImage.url}`)
        const img = el.webImage.url
        console.log(`This is the Title ---> ${title}`)
        console.log(`This is the maker ${maker}`)
        return (
            <div>
                <h1>{img}</h1>
                {/* <h1>{maker}</h1> */}
            </div>


        )
    })


    return (
        <div>

            Welcome To The Art Page

            Check out our Sweet Titles

            {artCardMap}
            {artCardMaker}


            <div className="card" style={{ width: "18rem" }}>
                <img src={artCardImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title: {artCardMap}</h5>
                    <p className="card-text">Author: {artCardMaker}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>




        </div>
    )
}

export default Art