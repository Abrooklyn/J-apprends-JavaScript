//EVENTS

//Base
/*
const lien = document.querySelector("a");

lien.addEventListener("click", function() {
    console.log("Click click");
})
*/

//Supprimer un evenement
/*
const lien = document.querySelector("a");
function clic() {
    console.log("clic");
    lien.removeEventListener("click", clic);
}
lien.addEventListener("click", clic);
*/

//Surveiller le clavier de l'utilisateur
/*
addEventListener("keypress", function(event) {
    console.log(event.key);
})
*/

//PRATIQUE Affichez une image au clic

addEventListener("click", function(event) {
    const image = document.createElement("img");
    const size = 100;
    image.setAttribute("src", "http://lorempixel.com/${size}/${size}");

    image.style.position = "absolute";
    image.style.top = event.y - size / 2 + "px";
    image.style.left = event.x - size / 2 + "px";

    document.body.appendChild(image);
});

