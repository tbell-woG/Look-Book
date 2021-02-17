import React, { useState, useEffect } from "react"
import API from "../utils/API"
import axios from "axios"
import 'font-awesome/css/font-awesome.min.css';

//import Card from "../componetents/Card";



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

    function remove(id) {
        console.log("Attempting to remove an art piece!")
        axios({
            method: 'delete',
            url: '/api/art/:id',
            data: {
                id: id
            }
        }).then(function () {
            API.getFavoriteArt()
                .then(res => {
                    console.log("this is my favorites")
                    console.log(res);
                    setFavorites(res.data)
                    console.log("This is my fav")
                    console.log(favorites)
                })
        }
        );
    }

    return (
        <div>
            <h2>REFLECT ON YOUR FAVORITE ART</h2>
            {/* <div className="card"> */}
            {favorites.map((art, index) => (
                <div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={art.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{art.title}</h5>
                            <p className="card-text">{art.author}</p>
                            <a className="btn btn-dark" onClick={() => remove(art._id)}><i className="fa fa-trash" aria-hidden="true"></i></a>
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