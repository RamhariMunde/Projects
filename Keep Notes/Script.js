const keepnote = document.querySelector(".notes-container");
const button = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box")

button.addEventListener("click", () => {
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable","true");
    img.src = "https://as2.ftcdn.net/v2/jpg/03/46/38/39/1000_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg";
    keepnote.appendChild(inputbox).appendChild(img);
 })

   keepnote.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    }
   })
