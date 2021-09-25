document.querySelector("#aboutUs").addEventListener("click", (e) => {
     e.preventDefault();
     document.querySelector(".modalAbout").style.display = "block";
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