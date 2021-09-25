if (document.querySelector("#question") !== null) {
  document.querySelector("#question").addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelector(".modal").style.display = "flex";
    document.querySelector("body").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
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
    // document.querySelector(".dogs", ".paw").style.display= "none";
    //   document.querySelector("body").style.overflow = "scroll";
  });
}

// window.addEventListener("click", (e) => {
// if (e.target == body) {
//     modal.style.display = "none";
// }
// })
if (document.querySelector("#login") !== null) {
  document.querySelector("#login").addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelector(".modalLoginMain").style.display = "flex";
    document.querySelector("body").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
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
          ".q_button" ||
          ".body"
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
    console.log("it works");
    }
    //   document.querySelector("body").style.overflow = "scroll";
  });
}
if (document.querySelector("#sign-up") !== null) {
  document.querySelector("#sign-up").addEventListener("click", (e) => {
    document.querySelector(".modalregistermain").style.display = "flex";
    document.querySelector("body").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    e.stopPropagation();
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
          ".q_button" ||
          ".body"
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
    console.log("sign up works");
    //   document.querySelector("body").style.overflow = "scroll";
    }
  });
}
