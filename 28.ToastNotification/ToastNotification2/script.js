let x;
let toast = document.getElementById("toast");
let close = document.getElementById("close");
let showtoast = document.getElementById("show-toast");

close.addEventListener("click", () => closeToast());
showtoast.addEventListener("click", () => showToast());

function showToast() {
  clearTimeout(x);
  toast.style.transform = "translateX(0)";
  x = setTimeout(() => {
    toast.style.transform = "translateX(400px)";
  }, 3000);
}

function closeToast() {
  toast.style.transform = "translateX(400px)";
}
