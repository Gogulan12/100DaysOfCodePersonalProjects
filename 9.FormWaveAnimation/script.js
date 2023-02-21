const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  // innertext to go through each letter, then split it into an array. then map through that array to create an array with a letter with a span arround it. then turning it back into a string.
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});
