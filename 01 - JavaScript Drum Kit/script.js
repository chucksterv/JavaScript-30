//Todo Modify code so you can press the keys on screen to play sound
//Todo Modify CSS to be responsive. Adding a Grid or Flex with a wrap should do it.
function playSound(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);

  if (!audio) return; ///Stops the function if there is no audio.
  audio.currentTime = 0; //Rewids to start.
  audio.play();
  key.classList.add("playing");
}

//Tried setting this up as an arrow function. Didn't work.
//Arrow function took "this" to mean the window and now the key that was passed in.
function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skip if it's not a transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound); //Doesn't need to pass in the (e) here as I thought.
