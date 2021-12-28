if (document.querySelector("#question") !== null) {
  document.querySelector("#question").addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelector(".modal").style.display = "flex";
    document.querySelector("body").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  });
}

if (document.querySelector("#login") !== null) {
  document.querySelector("#login").addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelector(".modalLoginMain").style.display = "flex";
    document.querySelector("body").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  });
}
if (document.querySelector("#sign-up") !== null) {
  document.querySelector("#sign-up").addEventListener("click", (e) => {
    document.querySelector(".modalregistermain").style.display = "flex";
    document.querySelector("body").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    e.stopPropagation();
  });
}
