# unit9-liri-node-app

*** To see a working demonstration of this app, please open the gifAppDemo file in this repository :) ***

APP DESCRIPTION:

This CLI App makes calls to three different APIs -- Spotify, OMDB, and Bands in Town. The app uses Axios to make calls to the OMDB and Bands in Town APIs. 

The user makes calls to the Spotify API by typing the following in the command line: 

        node liri.js spotify-this-song '<song name here>'

This will return the following info for all relevant tracks:

        Artist(s)
        The song's name
        A preview link of the song from Spotify
        The album that the song is from



The user makes calls to the OMDB API by typing the following in the command line: 

        node liri.js movie-this '<movie name here>'

This will return the following info for the requested film:

        * Title of the movie.
        * Year the movie came out.
        * IMDB Rating of the movie.
        * Rotten Tomatoes Rating of the movie.
        * Country where the movie was produced.
        * Language of the movie.
        * Plot of the movie.
        * Actors in the movie.



The user makes calls to the Bands in Town API by typing the following in the command line: 

        node liri.js concert-this <artist/band name here>

This will return the following info for all of the band/artist's upcoming concerts:

        Name of the venue
        Venue location
        Date of the Event (used moment.js to format this as "MM/DD/YYYY")
            

