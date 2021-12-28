document.querySelector("#aboutUs").addEventListener("click", (e) => {
     e.preventDefault();
    document.querySelector(".modalAbout").style.display = "flex";
     document.querySelector("body").style.backgroundColor =
       "rgba(0, 0, 0, 0.5)";
})
const mainmodal = document.querySelector(".modal");
const loginmodal = document.querySelector(".modalLoginMain");
const registermodal = document.querySelector(".modalregistermain");
const modala = document.querySelector(".modalAbout");

window.addEventListener("click", (e) => {
  if (
    e.target == modala ||
    e.target == loginmodal ||
    e.target == registermodal ||
    e.target == mainmodal
  ) {
    modala.style.display = "none";
    loginmodal.style.display = "none";
    registermodal.style.display = "none";
    mainmodal.style.display = "none";
  }
})

