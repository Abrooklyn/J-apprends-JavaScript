//TEST alert("coucou");
/*
const titre = document.body.getElementsByTagName("h1"); //pour cibler un style de balise

//const titre = document.getElementById("titre"); //pour cibler un ID

const texte = document.body.getElementsByTagName("p");

const autre = document.body.getElementsByTagName("li");

console.log(titre);
*/

//Déplacer un Element
/*
const titre = document.getElementById("titre");
const texte = document.body.getElementsByTagName("p");

console.log(titre);
*/

//insertbefore
/*
const titre = document.getElementById("titre");
const texte = document.body.getElementsByTagName("p");

console.log(titre[1]);

document.body.insertBefore(texte[1], titre);

document.body.appendChild(titre);

document.body.removeChild(titre);
*/

//nouvel element texte
/*
const titre = document.getElementById("titre");
const texte = document.body.getElementsByTagName("p");

const nouveauTexte = document.createTextNode("Hello c'est moi !");

document.body.appendChild(nouveauTexte);

document.body.replaceChild(nouveauTexte, texte[1]);
*/

//créer n'importe quel type d'element
/*
const titre = document.getElementById("titre");
const texte = document.body.getElementsByTagName("p");

function ajouterTexte(pseudo, monTexte) {
    const nouveauTexte = document.createElement("p");
    nouveauTexte.innerHTML = `<strong>${pseudo}: ${monTexte}</strong>`;

    document.body.appendChild(nouveauTexte);
}

ajouterTexte("Angie", "blablabla");
ajouterTexte("Shiklah", "blablabloute");
ajouterTexte("Wade", "blablablahhha");
ajouterTexte("Peter", "blablabli");
ajouterTexte("Steve", "bloup");
*/

//modifier des attributs
/*
const titre = document.getElementById("titre");
const texte = document.body.getElementsByTagName("p");
const lien = document.body.getElementsByTagName("a")[0];

lien.setAttribute("href", "https://github.com/Abrooklyn");
console.log(lien.getAttribute("href"));
*/

//changer une liste d'element en array
/*
const titre = document.getElementById("titre");
const texte = document.body.getElementsByTagName("p");
const lien = document.body.getElementsByTagName("a")[0];

const texteArray = Array.from(texte);
texteArray.map(paragraphe => paragraphe.innerHTML = "Hahahaha je t'ai hacké !")

console.log(texteArray);
*/

//TAILLE D'UN ELEMENT
/*
const titre = document.getElementById("titre");
const texte = document.body.getElementsByTagName("p");
const lien = document.body.getElementsByTagName("a")[0];

console.log(titre.offsetHeight, titre.offsetWidth);//exterieur

console.log(titre.clientHeight, titre.clientWidth);//interieur
*/

//MODIFIER LE STYLE
/*
const titre = document.getElementById("titre");
const texte = document.body.getElementsByTagName("p");
const lien = document.body.getElementsByTagName("a")[0];

titre.style.color = "#C55";
titre.style.fontFamily = "Arial";
titre.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.3)";
*/
//autre façon de trouver un element
/*
const texte = document.body.getElementsByTagName("p");
const lien = document.body.getElementsByTagName("a")[0];

//const titre = document.querySelector("h1");
const titre = document.querySelector("#titre");
console.log(titre);
*/

//AJOUTER OU SUPPRIMER DES CLASSES CSS
/*
const titre = document.querySelector("h1");
const titre = document.querySelectorAll("a");

liens[0].addEventListener("click", function() {
    titre.classList.add("fbi");
});
liens[1].addEventListener("click", function() {
    titre.classList.remove("fbi");
});
liens[2].addEventListener("click", function() {
    titre.classList.toggle("fbi");
});
*/

//PRATIQUE
/*
const titres = document.querySelectorAll("h1");

function goToTitre(titre) {
    const distance = titre.offsetTop;
    console.log(titre.offsetTop);

    window.scrollTo(0, distance);
}

goToTitre(titres[1]);
*/