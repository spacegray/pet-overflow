document.querySelector("#aboutUs").addEventListener("click", (e) => {
     e.preventDefault();
    document.querySelector(".modalAbout").style.display = "flex";
     document.querySelector("body").style.backgroundColor =
       "rgba(0, 0, 0, 0.5)";
          if (
            document.querySelector(
              ".circle" ||
                ".dogs" ||
                ".want" ||
                ".vals_ask" ||
                ".paw" ||
                ".main_text" ||
                ".box1" ||
                ".box2" ||
                ".box3" ||
                ".box4" ||
                ".q_button"
            ) !== null
          ) {
            document.querySelector(".circle").style.display = "none";
            document.querySelector(".dogs").style.display = "none";
            document.querySelector(".want").style.display = "none";
            document.querySelector(".vals_ask").style.display = "none";
            document.querySelector(".paw").style.display = "none";
            document.querySelector(".main_text").style.display = "none";
            document.querySelector(".box1").style.display = "none";
            document.querySelector(".box2").style.display = "none";
            document.querySelector(".box3").style.display = "none";
            document.querySelector(".box4").style.display = "none";
            document.querySelector(".q_button").style.display = "none";
          }
})

const modala = document.querySelector(".modalAbout");
window.addEventListener("click", (e) => {
  if (e.target == modala) {
    console.log("helighfhf ");
    modala.style.display = "none";
  }
})
// window.onclick = function (event) {
//   if (event.target === modala) {
//     console.log("helighfhf ");
//     modal.style.display = "none";
//   }
// };
