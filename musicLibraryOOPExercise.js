
// Define multiple prototype functions:
//
// Library
// Playlist
// Tracks


// prototye function Library
class Library {
  constructor(name, creator) {
    // A Library has a name and a creator (both strings)
    this.name = name;
    this.creator = creator;
    // A Library has many playlists (starts as an empty array)
    this.playlists = [];
  }

  // Playlist objects can be added to an instance of a library (e.g. my const libraryInfo object)
  addPlaylistToLibrary(playlist) {
    if (playlist instanceof Playlists) {
      this.playlists.push(playlist)
    }
  }

// end of class Library
}


// prototye function Playlist
class Playlists {
  constructor(name) {
    // Each Playlist has a name which is required upon creation
    this.name = name;
    // A Playlist has many tracks
    this.tracks = [];
  }

 // calculates each playlists overall rating by averaging the rating of its tracks
  overallRating() {
     let rating = 0;
     let playlist = this.tracks
     playlist.forEach( (track) =>
      rating += track.rating
     )
     return rating / playlist.length
  }

  // sums the duration of all of its tracks
  totalDuration() {
    let duration = 0;
    let playlist = this.tracks
    playlist.forEach( (track) =>
      duration += track.length
    )
    return duration / 60;
  }

  // track objects can be added to an instance of a playlist
  addTracksToPlaylist(track) {
    if (track instanceof Tracks) {
      this.tracks.push(track)
    }
  }
// end of class Playlist
}


// prototye function Tracks
class Tracks {
  constructor(title, rating, length) {
    // a Track has a title, a rating (an integer from 1 to 5) and a length (integer in seconds) all of which are required when creating a new track
    this.title = title;
    this.rating = rating;
    this.length = length;
  }

  addToPlaylist(playlist) {
    if(playlist instanceof Playlists) {
      playlist.tracks.push(this)
    }
  }

}

// new instance of class Tracks
newTrackFirst = new Tracks("some track", 3, 120)
newTrackSecond = new Tracks("another track", 5, 180)
newTrackThird = new Tracks("last track", 1, 320)


// new instance of class Playlists
playlistFirst = new Playlists("some playlist")
playlistFirst.addTracksToPlaylist(newTrackFirst);
playlistFirst.addTracksToPlaylist(newTrackSecond);

playlistSecond = new Playlists("some playlist")
playlistSecond.addTracksToPlaylist(newTrackThird);


// new instance of class Library (aka oject)
libraryInfo = new Library("My music Library", "Dee")
libraryInfo.addPlaylistToLibrary(playlistFirst)



console.log(libraryInfo);
console.log(playlistFirst);
console.log(Math.round(playlistFirst.totalDuration()) + ' minutes')
console.log(playlistFirst.overallRating() + ' stars')
console.log(playlistSecond);
console.log(Math.round(playlistSecond.totalDuration()) + ' minutes')
console.log(playlistSecond.overallRating() + ' stars')
