import React, { useState, useEffect } from "react";
import axios from "axios"
import API from "../utils/API";
import 'font-awesome/css/font-awesome.min.css';


function Art() {
    const [art, setArt] = useState([])
    const [index, setIndex] = useState(0)

    // useEffect(() => {
    //     API.getArtFromMuseum()
    //         .then(res => {
    //             console.log('Attempting to Get Art From Museum')
    //             console.log("under me is the res")
    //             console.log(res)

    //             // loop through the response
    //             var artPieces = []

    //             for(i = 0; i < res.data.artObjects.length; i++) {
    //                 console.log('we are entering the for loop')
    //                 var i = index

    //                 if (res.data.artObjects[i].webImage.url) {
    //                     artPieces.push()
    //                 }
    //             }
    //             setArt(artPieces)   
    //             // create random number
    //             // const index = Math.floor(Math.random() * 6)
    //             // setIndex(index)
    //             // set index to random number

    //         })
    // }, [])

    useEffect(() => {
        API.getArtFromMuseum()
            .then(res => {
                console.log('Attempting to Get Art From Museum')
                console.log("under me is the res")
                console.log(res.data.artObjects);

                // loop through the response
                var artPieces = []

                for (let i = 0; i < res.data.artObjects.length; i++) {
                    console.log('iteration', i);

                    if (res.data.artObjects[i].webImage) {
                        console.log("artObject has image url");
                        artPieces.push(res.data.artObjects[i]);
                    }

                }
                console.log("setting state", artPieces);
                setArt(artPieces);
            })
    }, []);


    function voteNo () {
        console.log('They are attempting to vote no!')
        // reload the webpage 
        // locaation.reload()
        // add index
        // const newIndex = index + 1
        // setIndex(newIndex)

        setIndex(prevIndex => prevIndex + 1)
        console.log(index)
    }

    function voteYes(title, img, author) {
        console.log('They are attempting to vote yes')
        // post request
        // axios post method
        axios({
            method: 'post',
            url: '/api/art',
            data: {
              title: title,
              image: img,
              author: author
            }
          });

          // if art[index].webImage.url exists the setIndex to that index

          setIndex(prevIndex => prevIndex + 1)
          console.log(index)
    }

    return (
        <div style={{ fontFamily: "'Libre Baskerville', serif", letterSpacing: "7px", textAlign: "center", fontStyle: "italic", fontSize: "30px", padding: "70px" }}>
                VIEW AND FAVORITE ART PIECES
            {art.length ? (
                //map over data and make a card element
                // select a random number between 1 and 6

                <div className="card" style={{ marginTop: "75px", width: "18rem" }}>
                    <img src={art[index].webImage.url} className="card-img-top" alt="Picture coming from the art database" />
                    <div className="card-body">
                        <h5 className="card-title" style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "20px", letterSpacing: "3px" }}>Art Title: {art[index].title}</h5>
                        <p className="card-text" style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "16px", letterSpacing: "3px" }}>Artist: {art[index].principalOrFirstMaker}</p>
                        <div className="vote-buttons">
                            <a href="#" onClick={() => voteYes (art[index].title, art[index].webImage.url, art[index].principalOrFirstMaker)} className="btn btn-dark"><i className="fa fa-thumbs-up" aria-hidden="true"></i></a>
                            <a href="#" onClick={voteNo} className="btn btn-dark" style={{ marginLeft: "20px" }}><i className="fa fa-thumbs-down" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            ) : <h1 style={{ fontFamily: "'Libre Baskerville', serif", letterSpacing: "7px", textAlign: "center", fontSize: "30px", padding: "70px" }}>LOADING ART PIECES...</h1>}
        </div>
    )
}

export default Art