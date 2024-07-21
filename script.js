const menuToggle = document.querySelector(".menu-toggle");
const navbarMenu = document.querySelector(".navbar_menu");

menuToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('audio');
    var playButton = document.getElementById('playButton');
    
    // Play audio when the page loads
    audio.play();
    
    // Toggle play/pause when the button is clicked
    playButton.addEventListener('click', function() {
      if (audio.paused) {
        audio.play();
        this.textContent = '>';
      } else {
        audio.pause();
        this.textContent = '||';
      }
    });
  });
  