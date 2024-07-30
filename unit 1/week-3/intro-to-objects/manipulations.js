/*
***Changing an object’s properties***
we can use the bracket (or the dot notation)
and the equal sign to change the value of the property
const music = {
    currentTrack: 'Just Ken',
    currentPlaylist: ['Just Ken', 'Hey Blondie', 'What Was I Made For', 'Dance The Night'],
    volume: 70,
}


console.log(music.volume) //70
console.log(music['currentTrack']) //Just Ken


//updates the volume property from 70 to 10
music.volume = 10
console.log(music.volume) //10
//lets see what the object look like at this point
console.log(music)

//updates the currentTrack property from 'Just Ken' to  'What Was I Made For'
music['currentTrack'] = 'What Was I Made For'
console.log(music['currentTrack']) // 'What Was I Made For'
//lets see what the object look like at this point
console.log(music)
*/

/*
similiary to updating the properties (aka the attribute aka the keys) using dot notation or bracket notation for those properties that exist
IF THEY DO NOT EXIST, we are simply adding new properties
music.genre = 'county?'

console.log(music) //added a property called genre

music.artist = 'got to look this up'
console.log(music) //added a property called artist


music['country'] = 'us'
console.log(music) //added a property called country
*/
/*
const person = {
    name: 'Matt',
    age: 24,
}
console.log(person)

person.age = 27 changes the property

console.log(person)

person.kids = ["theo"] adds a property name after the . can add any elements

console.log(person)
*/


/*
**************************
HOW TO DELETE
**************************

const nowPlaying = {
artist: 'backstreet boys',
track: "everybody",
volume: 100,
}

console.log(nowPlaying)

delete nowPlaying.artist
console.log(nowPlaying)
delete nowPlaying.track
console.log(nowPlaying)
delete nowPlaying.volume
console.log(nowPlaying)
*/

/*
const favMovie = { 

}

favMovie.name = "real steal"
favMovie.yearCameOut = 2011

console.log(favMovie)

favMovie.name = "Scooby Doo"
delete favMovie.yearCameOut
console.log( favMovie )
*/

/*
const music = {
    currentTrack: 'Just Ken',
    currentPlaylist:['Just Ken', 'Hey Blondie', 'What i was made for', 'Dance the Night'],
    volume: 70
}

music.age = 2023
console.log(music)
                      // all functions must be unnamed in objects
music.mute = function mute(){music.volume = 0}
console.log(music)
music.mute()// runs function
console.log(music)

music.unMute = function unMute(){music.volume = 70}
console.log(music)
music.unMute()
console.log(music)

music.adjustVolume = function(vol){music.volume = vol}// variable is anything you want
music.adjustVolume(68)//assign value to function
console.log(music)
*/
const music = {
    currentTrack: 'Just Ken',
    currentPlaylist:['Just Ken', 'Hey Blondie', 'What i was made for', 'Dance the Night'],
    volume: 70
}

music.mute = function mute(){
   music.lastVol = music.volume// how to save last known value
    music.volume = 0
}
console.log(music)
music.mute()// runs function
console.log(music)

music.unMute = function unMute(){music.volume = music.lastVol}
console.log(music)
music.unMute()
console.log(music)
