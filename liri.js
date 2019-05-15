require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var axios = require('axios')





//getting the value from user
var userCommand = process.argv[2]
var userQuery = process.argv.slice(3).join(' ')


console.log(userCommand)
console.log(userQuery)
if (userCommand === "spotify-this") {



    spotify.search({ type: 'track', query: userQuery }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }


        // console.log(data.tracks.items[0]);
        console.log(data.tracks.items[0].album.artists);
    });
} else if (userCommand === "movie-this") {
    axios.get('http://www.omdbapi.com/?apikey=trilogy&t=' + userQuery)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });


} else if (userCommand === "concert-this") {
    axios.get('https://rest.bandsintown.com/artists/' + userQuery + '/events?app_id=codingbootcamp')
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

