// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

const ctx = canvas.getContext("2d");

let size = 10;
let isPressed = false;
let color = "black";
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  // gives the positioning of where the mouse is
  x = e.offsetX;
  y = e.offsetY;
  // console.log(isPressed, x, y);
});
canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  // gives the positioning of where the mouse is
  x = undefined;
  y = undefined;
  // console.log(isPressed, x, y);
});
canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    // give position of where mouse is
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    // console.log(x2, y2);
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

// x1 and y1 is the move to and x2/y2 is the line to( which draws the line)
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  // x2 so line width is same as circle size
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

// drawCircle(100, 200);
// drawLine(300, 300, 300, 500);

function updateSzieOnScreen() {
  sizeEl.innerText = size;
}

increaseBtn.addEventListener("click", () => {
  size += 5;

  if (size > 50) {
    size = 50;
  }

  updateSzieOnScreen();
});
decreaseBtn.addEventListener("click", () => {
  size -= 5;

  if (size < 5) {
    size = 5;
  }
  updateSzieOnScreen();
});

colorEl.addEventListener("change", (e) => (color = e.target.value));

clearEl.addEventListener("click", () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
);
