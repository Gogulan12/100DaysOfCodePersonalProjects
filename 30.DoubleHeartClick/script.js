const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

// double click event listener

// loveMe.addEventListener("dblclick", (e) => {
//   console.log(123);
// });

// custom double click event listener

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
    // console.log(clickTime);
  } else {
    if (new Date().getTime() - clickTime < 800) {
      // console.log(123);
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});
// the e for for the image div element
const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;

  // the offset is the space between the image and the rest of the screen.
  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  // subtract that to show whats in the image (that this is the working space, not the entire screen)
  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  // console.log(xInside, yInside);

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  times.innerHTML = ++timesClicked;
  // the heart says on the screen but opacity is zero so the heart needs to be removed
  setTimeout(() => heart.remove(), 1000);
};
