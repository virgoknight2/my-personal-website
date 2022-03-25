const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

const input = document.getElementById('body');

function setHideImages( visible) {
  var img= document.getElementsById('mama');
  var img1= document.getElementById('selfie');
  img.style.visibility = (visible ? 'visible' : 'hidden');
  img1.style.visibility = (visible ? 'visible' : 'hidden');
}

input.addEventListener('click', setHideImages(false));