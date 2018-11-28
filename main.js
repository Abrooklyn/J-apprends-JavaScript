//VARIABLES :

/*

var num = 10;

var chiffre = 0;

console.log(chiffre + num);

chiffre = 10;

console.log(chiffre + num)*/

//NOMMER LES VARIABLES : 

/*

var motDePasse = 1234;

Toujours mettre 

"lePremierMotEnMinuscule"

et le reste avec des majuscules

*/

//LES CALCULS

/*

console.log(11 + 2);

console.log(11 * 2);

console.log(11 - 2);

console.log(11 / 2);

console.log(11.78952 + 2);

console.log(11,78952 * 2, 23);

*/

//LES ADDITIONS +=

/*

var num = 5;
var += 5;

num /= 5;

num *= 5;

num *= 5 + 5;

num *= 5 + 5 / 2 + (5 + 4);

var num = 5;
num *= 5 + 5 / 2 + (5 + 4);
console.log(5 + 5 / 2 + (5 + 4));
console.log(num)
console.log(5 * 42.5);

*/

//STRING

/*

var texte = "Coucou";
console.log("Hello");

var autreTexte = 'Bonjour';
console.log(autreTexte);

var autretexte = 'Bonjour je m\'appelle';
var texte = "Coucou \"Antho\"";

var texte = "Coucou \nAntho";
console.log(texte);

var texte = "Coucou \\Antho";

*/

//COMBINER DU TEXTE

/*

var bonjour = "Bonjour";
var nom = "Antho";
var resultat = bonjour + " " + nom;

console.log(bonjour + " " + nom);
console.log(resultat);

bonjour += " " + nom;
console.log(bonjour);

var nom = "Angie";
var age = 24;

var resultat = "Bonjour " + nom + " tu as "+ age + " ans !";
console.log(resultat);

*/

//LONGUEUR TEXT

/*

var nom = "Angie";

console.log(nom.length);
//variante
console.log("Angie" .length);

var nom = "Angie";

console.log(nom[3]);

console.log(nom[nom.length - 1]);

console.log(nom.length - 2);

*/

//CORRIGER

/*

var nom = "Engie";

nom = "Angie";

console.log(nom);

*/

//ARRAY - TABLEAU


var nom = "Angie";
var age = 24;

var stats = ["attaque", "défense"];

var array = [nom, age, stats];

array[0] = "Toto"; //changement de mon array
array[1] = 50; //changement d'age
array[2][1] = "Puissance";

console.log(array);

//ACCEDER AUX DONNEES DE L'ARRAY

/*

console.log(array[2]);

console.log(array[2][1]);

*/

