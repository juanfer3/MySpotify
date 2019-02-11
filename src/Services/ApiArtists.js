import axios from 'axios';

const UrlArtists = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=d6c8cd5b2e080637e0f3c77eeb023bf5&format=json'
const UrlAlbums = 'http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=disco&api_key=d6c8cd5b2e080637e0f3c77eeb023bf5&format=json'
//const URL =`https://jsonplaceholder.typicode.com/todos/`

function getArtist() {
    return  axios.get(UrlArtists)
            .then(response=>{
                return response.data.topartists.artist
                })
}
function getArtistName(name){
    return axios
        .get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=d6c8cd5b2e080637e0f3c77eeb023bf5&format=json`)
            .then(response=>{
                return response.data.artist
            })
}

function getAlbums(){
    return axios
        .get(UrlAlbums)
            .then(response=>{
                return response.data.albums.album
            })
}

function getAlbumName(name) {
    return axios 
        .get(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${name}&api_key=d6c8cd5b2e080637e0f3c77eeb023bf5&format=json`)
            .then(response=>{
                return response.data.results.albummatches.album
            })
}

export {
    getArtist,
    getArtistName,
    getAlbums,
    getAlbumName
}