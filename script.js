const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

const input = document.getElementById('body');

function setHideImages( visible) {
  var img= document.getElementsById('mama');
  var bunt= document.getElementById('selfie');
  img.style.display = (visible ? 'visible' : 'hidden');
  bunt.style.display = (visible ? 'visible' : 'hidden');
}

input.addEventListener('click', setHideImages(true));