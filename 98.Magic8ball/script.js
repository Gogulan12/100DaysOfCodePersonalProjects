const answerArray = [
  "It is certain.",
  "Without a doubt.",
  "Yes, definitely.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Don't count on it.",
  "My sources say no.",
  " Outlook not so good.",
  "Signs point to yes.",
  "Most likely.",
  "It is decidedly so.",
  "Yes, definitely.",
  "You may rely on it.",
  "Concentrate and ask again.",
  "My reply is no.",
  "Very doubtful.",
  "Outlook good.",
  "As I see it, yes.",
];

const message = document.querySelector(".message");
const question = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log(question.value);
  let res = Math.floor(Math.random() * answerArray.length);
  console.log(answerArray[res]);
  message.innerHTML = `Question: <br> ${question.value} <br> Answer: <br> ${answerArray[res]}`;
  question.value = "";
});
