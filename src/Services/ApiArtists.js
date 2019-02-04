import axios from 'axios';

const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=d6c8cd5b2e080637e0f3c77eeb023bf5&format=json'
function getArtist() {
    return    axios.get(URL)
            .then(function(response){
                console.log(response.data);
                return response.data;
            })
}

export {
    getArtist
}