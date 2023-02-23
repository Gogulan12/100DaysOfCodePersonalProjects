const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  // fetch is asyn so we have to wait until its done fetching; when using await you have to label that function async
  const res = await fetch("https://icanhazdadjoke.com/", config);

  // also returns a promise so we have to await
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
}

// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com/", config)
//     .then((res) => res.json())
//     // .then((data) => console.log(data));
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }
