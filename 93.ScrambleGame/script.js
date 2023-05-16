window.addEventListener("load", init);

const myWords = [
  "javascript",
  "html",
  "course",
  "development",
  "coding",
  "brackets",
];

let cur = 0;
let startTime;

function init() {
  console.log("ready");
  let div = document.createElement("div");
  div.setAttribute("class", "message");
  div.innerText = "press start button";
  document.body.appendChild(div);
  let button = document.createElement("button");
  button.type = "button";
  button.innerText = "Start Game";

  button.addEventListener("click", start);

  document.body.appendChild(button);
  let div1 = document.createElement("div");
  div1.classList.add("game");
  document.body.appendChild(div1);
}

function start() {
  cur = 0;
  startTime = Date.parse(new Date());
  console.log(startTime);

  this.style.display = "none";
  let tempArr = myWords.slice(0);
  tempArr.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  myWords.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  const game = document.querySelector(".game");
  tempArr.forEach(function (item) {
    let temp = item.split("");
    temp.sort(function (a, b) {
      return 0.5 - Math.random();
    });
    let temp1 = temp.join("");
    // console.log(temp1);
    // console.log(item);
    let div = document.createElement("div");
    div.innerText = "select";
    div.classList.add("box");
    div.style.backgroundColor = "#E3CFAA";
    div.word = item;
    div.addEventListener("mouseenter", function () {
      div.style.backgroundColor = "white";
      div.innerText = temp1;
    });
    div.addEventListener("mouseleave", function () {
      div.style.backgroundColor = "#E3CFAA";
      div.innerText = "Select";
    });
    div.addEventListener("click", function () {
      // console.log(this.word);
      if (div.word === myWords[cur]) {
        console.log("right");
        this.classList.add("hidden");
        cur++;
        nextWord();
      } else {
        console.log("wrong");
      }
    });

    game.appendChild(div);
  });

  // console.log(myWords);
  // message("Select this Word" + );
  nextWord();
}

function nextWord() {
  // console.log(cur);
  if (cur >= myWords.length) {
    let endTime = Date.parse(new Date());
    let duration = (endTime - startTime) / 1000;
    document.querySelector(".game").innerHTML = "";
    document.querySelector("button").style.display = "block";
    message("Game Over. It took " + duration + " seconds");
  } else {
    message("Select this Word " + myWords[cur]);
  }
}

function message(output) {
  document.querySelector(".message").innerHTML = output;
}
