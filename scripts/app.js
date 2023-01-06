let songs = [];
let total_songs = 0;
let time = 0
const MAX_TIME = 100
let isPlaying = false



fetch("../data/songs.json").then(response => response.json()).then(data => {
  songs = data
});
//DOM


const playMusic = (delay = 400) => {

  const pauseButton = document.querySelector(".pause")
  const timeline = document.querySelector(".timeline")
  isPlaying = !isPlaying

  console.log('IS PLAYING', isPlaying)
  if (isPlaying) {
    pauseButton.style.display = "flex"
    eventTime = setInterval(() => {
      if (time >= MAX_TIME) {
        time = 0
        clearInterval(eventTime)
        isPlaying = false
      }
      time++
      console.log(time)
      timeline.style.width = `${time}%`
      pauseButton.style.display = "flex"

    }, delay)

  }
  else {
    clearInterval(eventTime)
    pauseButton.style.display = "none"
  }

}

