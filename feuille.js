const sounds = document.querySelectorAll(".sound");

sounds.forEach(sound => {
  const button = sound.querySelector('button');
  const audio = sound.querySelector('audio');
  
  button.addEventListener('mouseover', () => {
    audio.play();
  });
  
   button.addEventListener('mouseout', () => {
     if(!audio.paused) {
       audio.pause();
     }
  });
})