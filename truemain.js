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

