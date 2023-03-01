<<<<<<< HEAD
var element = $('#data-anijs');

// when mouseover execute the animation
element.mouseover(function(){
  
  // the animation starts
  element.toggleClass('wobble animated');
  
  // do something when animation ends
  element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
   
   // trick to execute the animation again
    $(e.target).removeClass('wobble animated');
  
  });
  
});
=======
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
>>>>>>> cb93837858ae6201bcfcf1735538404aed959b47
