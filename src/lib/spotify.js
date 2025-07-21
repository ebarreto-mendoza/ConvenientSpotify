import SpotifyWebApi from "spotify-web-api-node";  

const scopes = [
    "user-read-email",
    "user-read-private", 
    "user-library-read", 
    "user-top-read",
    "playlist-read-private",
    "playlist-read-collaborative",
    "playlist-modify-public",
    "playlist-modify-private",
].join(",");

const params = {
    scope: scopes,
};

const queryParamString = new URLSearchParams(params);


const LOGIN_URL = "https://accounts.spotify.com/authorize?" + queryParamString.toString();

const spotifyAPI = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
});

export default spotifyAPI;
export { LOGIN_URL };