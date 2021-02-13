import React, { useState, useEffect } from "react"
import API from "../utils/API"

function Art() {
    const [art, setArt] = useState([])

    useEffect(() => {
        API.getArtFromMuseum()
            .then(res => {

                setArt(res.data.artObjects)
            })
    }, [])



    const artCardMap = art.map((el, index) => {
        console.log(el)
        console.log(index)
        // return (
        //     <h1>{el.title}</h1>
        //     )
        })


    return (
                <div>

                    Welcome To The Art Page

                    Check out our Sweet Titles

            {/* {artCardMap} */}


            <div class="card" style={{width: "18rem"}}>
                <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>




                </div>
    )
}

export default Art