document.querySelector("#question").addEventListener("click", () => {
  document.querySelector(".modal").style.display = "block";
  document.querySelector("body").style.backgroundColor = "rgba(0, 0, 0, 0.5)"
//   document.querySelector("body").style.overflow = "scroll";
});

// window.addEventListener("click", (e) => {
// if (e.target == body) {
//     modal.style.display = "none";
// }
// })
document.querySelector("#loginBtn").addEventListener("click", () => {
  document.querySelector(".modal").style.display = "block";
  document.querySelector("body").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  //   document.querySelector("body").style.overflow = "scroll";
});