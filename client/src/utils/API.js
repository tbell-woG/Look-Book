import axios from "axios"

// api calls

    // make a function to retrieve art data
export default {
    getArtFromMuseum: function() {
        return axios.get("https://www.rijksmuseum.nl/api/nl/collection?key=FAarGOKp&involvedMaker=Rembrandt+van+Rijn")
    },
    getArtFromServer: function(){
        return axios.get('/api/art')
    }

}