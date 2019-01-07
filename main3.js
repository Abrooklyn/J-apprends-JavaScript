//Attendre qu'un element soit chargé (load)
/*
const images = document.querySelectorAll("img"); 

const imagesArray = Array.from(images);

imagesArray
        .map((image, index) => image.addEventListener("load", function() {
                console.log(`Image n°${index + 1}: OK`);
}))
*/

// PRATIQUE Déclencher un script au bout de X secondes (setTimeOut)
/*
const titre = document.querySelector("h1");

const texte = setTimeout(function() {
        titre.textContent = "Le JavaScript s'apprend avec patience.";
        titre.style.opacity = 1;
        document.body.style.background = "#FB1";
}, 2000)
*/

// Déclencher un script toutes les X secondes (setInterval)
/*
const titre = document.querySelector("h1");
let i = 3;

titre.addEventListener("click", function() {
        const compte = setInterval(function() {

        if (i > 0) {
                titre.textContent = i;
        }
        else {
                titre.textContent = "GO !";
                clearInterval(compte);
        }
        console.log(i)
        i--;
}, 1000);     
})
*/

// Supprimer toutes les voyelles du clavier (clvrJS)
/*
const texte = document.querySelector("textarea");
const txt = [];
const voyelles = ["a","e","i","o","u","y"];

texte.addEventListener("keypress", function(event) {
        const key = event.key;
        if (!voyelles.includes(key)) {
                txt.push(key);  
        }
        console.log(txt.join(""));
});
*/

//Desactiver un Bouton (disabledButton)

const texte = document.querySelector("textarea");
const button = document.querySelector("button");

texte.addEventListener("keyup", function() {
        button.disabled = texte.value.length > 20 ? true : false;   
});