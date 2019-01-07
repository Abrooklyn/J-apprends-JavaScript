//Attendre qu'un element soit chargé
/*
const images = document.querySelectorAll("img"); 

const imagesArray = Array.from(images);

imagesArray
        .map((image, index) => image.addEventListener("load", function() {
                console.log(`Image n°${index + 1}: OK`);
}))
*/

// PRATIQUE Déclenher un script au bout de X secondes

const titre = document.querySelector("h1");

const texte = setTimeout(function() {
        titre.textContent = "Le JavaScript s'apprend avec patience.";
        titre.style.opacity = 1;
        document.body.style.background = "#FB1";
}, 2000)