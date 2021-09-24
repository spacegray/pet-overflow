document.querySelector("#question").addEventListener("click", (e) => {
  e.stopPropagation();
  document.querySelector(".modal").style.display = "block";
  document.querySelector("body").style.backgroundColor = "rgba(0, 0, 0, 0.5)"
//   document.querySelector("body").style.overflow = "scroll";
});

// window.addEventListener("click", (e) => {
// if (e.target == body) {
//     modal.style.display = "none";
// }
// })
if(document.querySelector('#login') !== null) {
  document.querySelector("#login").addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelector(".modalLoginMain").style.display = "block";
    document.querySelector("body").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    console.log("it works")
    //   document.querySelector("body").style.overflow = "scroll";
  });

}
if(document.querySelector('#sign-up') !== null){

  document.querySelector("#sign-up").addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelector(".modalregistermain").style.display = "block";
    document.querySelector("body").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    console.log("sign up works")
    //   document.querySelector("body").style.overflow = "scroll";
  });
}
