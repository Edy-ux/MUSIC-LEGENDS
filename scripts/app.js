let songs = [];
let total_songs = 0;





fetch("../data/songs.json").then(response => response.json()).then(data => {
    songs = data
  });

  console.log(songs)


//DOM elements 

const menuMobile = document.querySelector('#navigation')
const buttonToggle = document.querySelector('#button__toggle')


const toogleMenuMobile = () => {
  menuMobile.classList.toggle('active');
  buttonToggle.classList.toggle('active');
}


