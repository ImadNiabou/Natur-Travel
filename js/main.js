
let hideText__btn = document.getElementById("hideText__btn");
let hideText = document.getElementById("hideText");

hideText__btn.addEventListener("click", toogleText);

function toogleText() {
    hideText.classList.toogle("show");

    if(hideText.classList.contains("show")) {
        hideText__btn.innerHTML = "Leer menos";
    }
    else {
        hideText__btn.innerHTML = "Leer mas";
    }
}
