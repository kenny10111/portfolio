const message = "Hi welcome to NELUONDE FHATUWANI KENNIDY portfolio ";
const target = document.getElementById("typewriter");
let index = 0;

function typeEffect() {
  if (index < message.length) {
    target.innerHTML += message.charAt(index);
    index++;
    setTimeout(typeEffect, 45); // speed of typing
  }
}

window.onload = typeEffect;