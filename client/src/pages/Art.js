import React, { useState, useEffect } from "react";
import axios from "axios"
import API from "../utils/API";


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
                        <a href="#" onClick={voteNo} className="btn btn-primary">Vote No</a>
                        <a href="#" onClick={() => voteYes (art[index].title, art[index].webImage.url, art[index].principalOrFirstMaker)} className="btn btn-primary">Vote Yes</a>
                    </div>
                </div>
            ) : <h1>Loading</h1>}
        </div>
    )
}

export default Art