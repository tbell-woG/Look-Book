import axios from "axios"

// api calls
// make a function to retrieve art data

export default {
    getArtFromMuseum: function () {
        return axios.get("https://www.rijksmuseum.nl/api/en/collection?key=FAarGOKp&toppieces")
    },
    getFavoriteArt: function () {
        return axios.get('/api/art')
    },
    
    // Deletes the post with the given id
    //     deleteFavorite: function(id) {
    //     return axios.delete("/api/art/" + id);
    //   },
}