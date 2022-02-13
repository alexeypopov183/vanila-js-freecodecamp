const switchBlock = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

switchBlock.addEventListener('click', function() {
  this.classList.toggle('slide');
  this.classList.contains('slide')
  ? video.pause()
  : video.play();
})

const preloader = document.querySelector('.preloader');
window.addEventListener('load', function() {
  preloader.classList.add('hide-preloader')
})
