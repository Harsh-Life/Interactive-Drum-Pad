window.addEventListener('keydown', function(e) {
  console.log(e.keyCode);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if(!key  || !audio) return;
    console.log(key);
    key.classList.add('scale-110', 'ring-4', 'ring-yellow-400', 'ring-opacity-80')
    audio.currentTime = 0;
    audio.play();

    setTimeout(() => {
        key.classList.remove('scale-110', 'ring-4', 'ring-yellow-400', 'ring-opacity-80')
    }, 150);
});




 