/*
***********
This
************
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
music.mute()// runs function
music.unMute = function unMute(){music.volume = music.lastVol}
music.unMute()


//This will reference back the object referenced in the line of code.