const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

const input = document.getElementById('body');

function setHideImages(visible) {
  var img= document.getElementById('mama');
  var bunt= document.getElementById('selfie');
  img.style.visibility = (visible ? 'visible' : 'hidden');
  bunt.style.visibility = (visible ? 'visible' : 'hidden');
}

input.addEventListener('click', setHideImages(false));