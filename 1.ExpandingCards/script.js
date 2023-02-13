//
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  // console.log(panel);
  // for each panel we want an event listener so that if we click it something happens, when that click happens we run a function
  panel.addEventListener("click", () => {
    // want to remove classes before adding active class
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
