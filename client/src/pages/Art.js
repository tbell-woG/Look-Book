import React from "react"
import API from "../utils/API"

function Art() {
    API.getArt().then(res => console.log(res))
    return (
        <div>
            Welcome To The Art Page
        </div>
    )
}

export default Art