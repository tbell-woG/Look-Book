import React, { useState, useEffect} from "react"
import API from "../utils/API"
//import Card from "../componetents/Card";

function Favorites() {
    const [favorites, setFavorites] = useState([])
    console.log("here!")
    useEffect(()=>{
        API.getFavoriteArt()
        .then(res => {
            console.log(res);
            setFavorites(res.data)
        })
    },[])

  

    
      



    return (
        <div>
            Welcome To The Favorites Page
            {/* <button onClick={Favorites()}>Favorites</button>
            Check out your favorites!

           
            */}
            {favorites.map((book, index) => (
        <p>Hello,{book.id}</p>
        // <Card title={person.title} />
    ))}
        </div>
    )
}

export default Favorites