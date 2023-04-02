const container = document.querySelector(".container");
const unsplashURL = "https://source.unsplash.com/random/";
// let rows = 10;
let rows = Math.floor(Math.random() * 10);
const button = document.querySelector(".button");

button.addEventListener("click", random);

function random() {
  container.innerHTML = "";
  rows = Math.floor(Math.random() * 10);

  for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement("img");
    img.src = `${unsplashURL}${getRandomSize()}`;
    container.appendChild(img);
  }
}

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${unsplashURL}${getRandomSize()}`;
  container.appendChild(img);
}

console.log();

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}
