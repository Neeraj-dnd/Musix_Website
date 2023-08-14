console.log("Welcome to Musix");

var index = 1;

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio(`https://github.com/Neeraj-dnd/Musix_Website/blob/master/songs/song_${index}.mp3`);
let myProgressBar = document.getElementById('myProgressBar');
let masterPlay = document.getElementById('masterPlay');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let songInfo = document.getElementById('songInfo');
let songs = Array.from(document.querySelectorAll('.songs'));
let songElements = document.querySelectorAll('.songs');
let playingSong = document.getElementById('playingSong');


let songslist = [
    {songName: "Retour (feat.Lara Somogyi)", filePath: "https://github.com/Neeraj-dnd/Musix_Website/blob/master/songs/song_1.mp3", coverPath: "https://github.com/Neeraj-dnd/Musix_Website/blob/master/song_covers/cover_1.jpg", duration: "07:05"},
    {songName: "Seeds", filePath: "https://github.com/Neeraj-dnd/Musix_Website/blob/master/songs/song_2.mp3", coverPath: "https://github.com/Neeraj-dnd/Musix_Website/blob/master/song_covers/cover_2.jpg", duration: "04:14"},
    {songName: "Spiriteaux", filePath: "https://github.com/Neeraj-dnd/Musix_Website/blob/master/songs/song_3.mp3", coverPath: "https://github.com/Neeraj-dnd/Musix_Website/blob/master/song_covers/cover_3.jpg", duration: "03:54"},
    {songName: "Tenderness (feat. Chris Coleman)", filePath: "https://github.com/Neeraj-dnd/Musix_Website/blob/master/songs/song_4.mp3", coverPath: "https://github.com/Neeraj-dnd/Musix_Website/blob/master/song_covers/cover_4.jpg", duration: "05:20", },
    {songName: "Jonti (2016 Remastered Version)", filePath: "https://github.com/Neeraj-dnd/Musix_Website/blob/master/songs/song_5.mp3", coverPath: "https://github.com/Neeraj-dnd/Musix_Website/blob/master/song_covers/cover_5.jpg", duration: "03:03"},
    {songName: "Colorado Nights", filePath: "https://github.com/Neeraj-dnd/Musix_Website/blob/master/songs/song_6.mp3", coverPath: "https://github.com/Neeraj-dnd/Musix_Website/blob/master/song_covers/cover_6.jpg", duration: "05:21"},
    {songName: "Noch", filePath: "https://github.com/Neeraj-dnd/Musix_Website/blob/master/songs/song_7.mp3", coverPath: "https://github.com/Neeraj-dnd/Musix_Website/blob/master/song_covers/cover_7.jpg", duration: "03:22"},
    {songName: "Journey", filePath: "https://github.com/Neeraj-dnd/Musix_Website/blob/master/songs/song_8.mp3", coverPath: "https://github.com/Neeraj-dnd/Musix_Website/blob/master/song_covers/cover_8.jpg", duration: "03:56"},
    {songName: "Butterflies (Piano Sonata)", filePath: "https://github.com/Neeraj-dnd/Musix_Website/blob/master/songs/song_9.mp3", coverPath: "https://github.com/Neeraj-dnd/Musix_Website/blob/master/song_covers/cover_9.jpg", duration: "04:00"},
    {songName: "Nuit", filePath: "https://github.com/Neeraj-dnd/Musix_Website/blob/master/songs/song_10.mp3", coverPath: "https://github.com/Neeraj-dnd/Musix_Website/blob/master/song_covers/cover_10.jpg", duration: "03:25"},
]


//listen to Events

//making all buttons to play;
const makeAllPlays = () => {
    songElements.forEach(function(songElement) {
        let play = songElement.getElementsByTagName('svg')[0];
        play.innerHTML = '<path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>';
    });
};


//playing particular song
let previousIndex = null;
songElements.forEach(function(songElement) {
    let play = songElement.getElementsByTagName('svg')[0];
    play.addEventListener('click', function(e) {
        index = parseInt(play.id);
        if (previousIndex !== index || audioElement.paused || audioElement.currentTime<=0) {
            makeAllPlays();
            play.innerHTML = '<path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/>';
            console.log(`index: ${index}`);
            audioElement.src = `/songs/song_${index}.mp3`;

            audioElement.play();
            masterPlay.innerHTML = '<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 192V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32z"/>';
            playingSong.innerText = `${songslist[index-1].songName}`;
            songInfo.style.opacity = 1;

            // Reset background color for all songs
            songElements.forEach(function(song) {
                song.style.backgroundColor = "rgba(171, 219, 227, 0.1)";
            });

            // Change background color for the currently playing song
            songElement.style.backgroundColor = "#abdbe366";

            previousIndex = index;
        }
        else if (!audioElement.paused) {
            audioElement.pause();
            masterPlay.innerHTML = '<path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/>';
            play.innerHTML = '<path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>';
            songInfo.style.opacity = 0;
            previousIndex = null;
        }
        else {
            console.log('inside else')
        }
        console.log('outside loop');
    });
});


//showing songs information
songs.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songslist[i].coverPath;
    element.querySelectorAll('.songTitle')[0].innerText = songslist[i].songName;
    element.querySelectorAll('.timestamp')[0].innerText = songslist[i].duration;
});


// masterPlay
document.addEventListener('DOMContentLoaded', function() {
    masterPlay.addEventListener('click', function() {
        if (audioElement.paused || audioElement.currentTime<=0) {
            audioElement.play();
            console.log(`masterPlay: ${index}`);
            let temp = document.getElementById(index);
            temp.innerHTML = '<path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/>';
            masterPlay.innerHTML = '<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 192V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32z"/>';
            songInfo.style.opacity = 1;
            songElements[index-1].style.backgroundColor = "#abdbe366";
        }
        else {
            audioElement.pause();
            makeAllPlays();
            masterPlay.innerHTML = '<path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/>';
            songInfo.style.opacity = 0;
        }
    });
});

//Previous button
previous.addEventListener('click', function() {
    index = index-1;
    if (index == 0) {
        index = 1;
    }
    makeAllPlays();
    audioElement.src = `/songs/song_${index}.mp3`
    audioElement.play();
    let temp = document.getElementById(index);
    temp.innerHTML = '<path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/>';
    masterPlay.innerHTML = '<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 192V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32z"/>';
    playingSong.innerText = `${songslist[index-1].songName}`;
    songInfo.style.opacity = 1;
    songElements[index].style.backgroundColor = "#abdbe31a";
    songElements[index-1].style.backgroundColor = "#abdbe366";
});

//next button
next.addEventListener('click', function() {
    index = index+1;
    if (index == 11) {
        index = 10;
    }
    makeAllPlays();
    audioElement.src = `/songs/song_${index}.mp3`
    audioElement.play();
    let temp = document.getElementById(index);
    temp.innerHTML = '<path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/>';
    masterPlay.innerHTML = '<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 192V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32z"/>';
    playingSong.innerText = `${songslist[index-1].songName}`;
    songInfo.style.opacity = 1;
    songElements[index-2].style.backgroundColor = "#abdbe31a";
    songElements[index-1].style.backgroundColor = "#abdbe366";
});


audioElement.addEventListener('timeupdate', ()=>{
    progress = (audioElement.currentTime/audioElement.duration)*100;
    myProgressBar.value = progress;
    //update seekbar
});

myProgressBar.addEventListener('input', ()=>{
    const newTime = myProgressBar.value * audioElement.duration/100;
    audioElement.currentTime = newTime;
});
