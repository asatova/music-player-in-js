const musicContainer = document.querySelector("#music-container");
    const playBtn = document.querySelector("#play");
    const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

const audio = document.querySelector("#music");
const progress = document.querySelector("#progress");
const progressContainer = document.querySelector("#progress-container");
const title = document.querySelector("#title");
const cover = document.querySelector("#cover");

const songs = ["1","2","3"];
let songIndex = 0;

loadSong (songs[songIndex]);

function loadSong(song){
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying){
      pauseSong();
  } else {
      playSong();
  }
});

function playSong() {
    musicContainer.classList.add("play");
    playBtn.querySelector("i.fas").classList.remove("fa-play");
    playBtn.querySelector("i.fas").classList.remove("fa-pause");
    audio.play()
}
function pauseSong() {
    musicContainer.classList.add("play");
    playBtn.querySelector("i.fas").classList.remove("fa-play");
    playBtn.querySelector("i.fas").classList.remove("fa-pause");
    audio.pause()
}
//change song

prevBtn.addEventListener("click",prevSong);
prevBtn.addEventListener("click",nextSong);

function prevSong(){
    songIndex --;
    if (songIndex < 0) {
        songIndex = song.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

//time song update

audio.addEventListener("timeupdate",updateProgress);
function updateProgress (e) {
    const { duration, curreTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

// Click on progress bar









