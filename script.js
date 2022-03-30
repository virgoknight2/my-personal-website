const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
  // 👇️ Change text color globally
  document.body.style.color = 'white';
});