import axios from "axios"

export default {
    // make a function to retrieve art data
    getArt: function() {
        return axios.get("https://www.rijksmuseum.nl/api/nl/collection?key=FAarGOKp&involvedMaker=Rembrandt+van+Rijn")
    }
    // make a function to save an Art piece
}