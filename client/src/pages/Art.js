import React, { useState, useEffect} from "react"
import API from "../utils/API"

function Art() {
    const [art, setArt] = useState([])

    useEffect(()=>{
        API.getArtFromMuseum()
        .then(res => {

            setArt(res.data.artObjects)
        })
    },[])

    

        const artCardMap = art.map(el => {
            console.log(el)
            return (
            <h1>{el.title}</h1>
          
            )
        })


    return (
        <div>

         

            Welcome To The Art Page

            Check out our Sweet Titles

            {artCardMap}
        </div>
    )
}

export default Art