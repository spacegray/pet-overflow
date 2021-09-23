document.querySelector("#question").addEventListener("click", () => {
  //      window.open(
  //     "/questions/ask",
  //     "formpopup",
  //     "width=400,height=400,resizeable,scrollbars"
  //   )
  document.querySelector(".modal").style.display = "block";
  document.querySelector("body").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
});

window.addEventListener("click", (e) => {
if (e.target == modal) {
    modal.style.display = "none";
}
})
