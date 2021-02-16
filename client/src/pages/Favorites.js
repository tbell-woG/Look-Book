import React, { useState, useEffect } from "react"
import API from "../utils/API"
import axios from 


//import Card from "../componetents/Card";

function remove() {
   console.log("Attempting to remove an art piece!") 
}

function Favorites() {
    const [favorites, setFavorites] = useState([])
    useEffect(() => {
        API.getFavoriteArt()
        .then(res => {
            console.log("this is my favorites")
            console.log(res);
            setFavorites(res.data)
            console.log("This is my fav")
            console.log(favorites)
        })
    }, [])
    

    return (
        <div>
            <h2>Reflect on your favorite art</h2>
            {/* <div className="card"> */}
                {favorites.map((art, index) => (
                    <div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={art.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{art.title}</h5>
                                <p className="card-text">{art.author}</p>
                                <a className="btn btn-danger" onClick={remove()}>Remove</a>
                            </div>
                        </div>
                    </div>
                    // <Card title={person.title} />
                ))}
            {/* </div> */}
        </div>
    )
}

export default Favorites