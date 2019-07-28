require('dotenv').config();

var keys = require('./keys.js');
var Spotify = require('node-spotify-api'); 
var spotify = new Spotify(keys.spotify);

var moment = require('moment'); 
moment().format();

var axios = require('axios'); 

var fs = require('fs'); 

var command = process.argv[2]; 
var search = process.argv[3]; 

// console.log(process.argv);

switch (command) {
    case 'spotify-this-song':
        spotifythisSong(search);
        break;
    case 'concert-this':
        concertThis(search);
        break;
    case 'movie-this':
        movieThis(search);
        break;
    case 'do-what-it-says':
        doWhat(search);
        break;
};



function spotifythisSong(search) {
    if(!search){
        search = 'The Sign Ace of Base'; 
    }
    spotify
    .search({ type: 'track', query: search })
    .then(function(response) {
        for (var i = 0; i < search.length; i++) {
            var spotifyResults = 

                    '\nArtist(s): ' + response.tracks.items[i].artists[0].name + 
                    '\nSong Name: ' + response.tracks.items[i].name +
                    '\nAlbum Name: ' + response.tracks.items[i].album.name +
                    '\nPreview Link: ' + response.tracks.items[i].preview_url +
                    '\n--------------------------------------------------------------------';                
            console.log(spotifyResults);
        }
    })
    .catch(function(error) {
        console.log(error);
    });
}

function concertThis(search) {
    axios.get('https://rest.bandsintown.com/artists/' + search + '/events?app_id=codingbootcamp')
    .then(function(response) {    
        for (var i = 0; i < search.length; i++) {
            var concertResults = 
                    '\nVenue Name: ' + response.data[i].venue.name + 
                    '\nVenue Location: ' + response.data[i].venue.city +
                    '\nDate of the Event: ' + moment(response.data[i].datetime).format('MM-DD-YYYY') +
                    '\n--------------------------------------------------------------------'; 
            console.log(concertResults);
        }
    })
    .catch(function (error) {
        console.log(error);
    });
}

function movieThis(search) {
    if(!search){
        search = 'mr nobody';
    }
    axios.get('https://www.omdbapi.com/?t=' + search + '&y=&plot=short&apikey=trilogy')
    .then(function(response) {
            var movieResults = 
                    '\nMovie Title: ' + response.data.Title + 
                    '\nYear of Release: ' + response.data.Year +
                    '\nIMDB Rating: ' + response.data.imdbRating +
                    '\nRotten Tomatoes Rating: ' + response.data.Ratings[1].Value +
                    '\nCountry Produced: ' + response.data.Country +
                    '\nLanguage: ' + response.data.Language +
                    '\nPlot: ' + response.data.Plot +
                    '\nActors/Actresses: ' + response.data.Actors +
                    '\n--------------------------------------------------------------------';
            console.log(movieResults);
    })
    .catch(function (error) {
        console.log(error);
    });
}

function doWhat() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (!error);
        console.log(data.toString());
        data.toString().split(',');
    });
}