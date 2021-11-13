const audio = new Audio();

let playSong = (song) => {
  audio.src = song;
  audio.play();
};

// Preloader
window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  preloader.className += " hidden"; // class "loader hidden"
});
