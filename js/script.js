document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('audio');
  const enterOverlay = document.querySelector('.enter-overlay');
  
  function startAudio() {
      audio.play();
      enterOverlay.style.display = 'none';
      enterOverlay.removeEventListener('click', startAudio);
  }

  
  enterOverlay.style.display = 'block';

  
  enterOverlay.addEventListener('click', startAudio);
});
