import axios from "axios"

// api calls

    // make a function to retrieve art data
export default {
    getArtFromMuseum: function() {
        return axios.get("https://www.rijksmuseum.nl/api/nl/collection?key=FAarGOKp&involvedMaker=Michelangelo&p=10&ps=60")
        // return axios.get("https://www.rijksmuseum.nl/api/nl/collection?key=FAarGOKp&p=10&ps=1")
    },
    getFavoriteArt: function(){
        return axios.get('/api/art')
    },
    // Deletes the post with the given id
//     deleteFavorite: function(id) {
//     return axios.delete("/api/art/" + id);
//   },

}
