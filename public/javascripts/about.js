document.querySelector("#aboutUs").addEventListener("click", (e) => {
    e.preventDefault();
    // document.querySelector(".dogs").style.display = "none";
    document.querySelector("#question").style.display = "none";
    document.querySelector(".paw").style.display = "none";
    document.querySelector(".want").innerHTML = "About Us"
    const newEle = document.createElement("div");
    document.querySelector(".welcome").appendChild(newEle);
    newEle.innerHTML= "HELLO IS THIS OWRKING?!"
})