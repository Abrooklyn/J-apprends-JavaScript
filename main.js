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

/*

var nom = "Angie";
var age = 24;

var stats = ["attaque", "défense"];

var array = [nom, age, stats];

array[0] = "Toto"; //changement de mon array
array[1] = 50; //changement d'age
array[2][1] = "Puissance";

console.log(array);

*/

//ACCEDER AUX DONNEES DE L'ARRAY

/*

console.log(array[2]);

console.log(array[2][1]);


console.log(array[2][1].length); //nombre de lettre "puissance"

*/

//ajouter et supprimer une donnée dans array

/*

var arr = [1, 2, 3];

arr.push("Salut"); //j'ajoute une donnée

var pop = arr.pop(); //je stock ma donnée la derniere donnée que j'ai également effacée

//arr.push(pop); //je push ce que j'avais extrait avant

console.log(arr);
console.log(pop);

*/

/*

var arr = [1, 2, 3];
arr.unshift(0); //j'ajoute un element en premier
console.log(arr);

var arr = [1, 2, 3];
arr.shift(); //j'ai supprimer le premier element
console.log(arr);

var arr = [1, 2, 3];
var shift = arr.shift(); //equivalent de pop et push
console.log(arr);
console.log(shift);

*/

//Exo 1 afficher des initiales

/*

var prenom = "Angie";
var nom = "Brooklyn";
var initiales = prenom[0] + nom[0];

var resultat = [];

resultat.push(prenom);
resultat.push(nom);
resultat.push(initiales);


console.log(resultat);

*/

//FUNCTIONS

/*

 function maFonction(num) {
     console.log(2 + num);
 }
 maFonction(8);

    // FUNCTIONS : soustraction

    function soustraction(a, b) {
        console.log(a - b);
    }
    soustraction(8, 2);

*/

//SCOPE

/*

var num = 5;
function soustraction(){
    var num = 7;
    console.log(num);
}
soustraction();
console.log(num);

*/
// c'est accessible de parent à enfant mais quelques choses creer dans un enfant ne sera pas accessible par le parents

// attention à la localisation de nos variables

//RETOURNER UNE VALEUR

/*
function soustraction(a, b){
    return a - b;
}
var resultat = soustraction(1, 5);
console.log(resultat);


function soustraction(a, b){
    return "Coucou";
}
var resultat = soustraction(1, 5);
console.log(resultat);
*/

// Exo 2 calculer une moyenne

/*

var note1 = 18;
var note2 = 20;
var moyenne = calculeMoyenne(note1, note2);

function calculeMoyenne(a, b){
    return (a + b) / 2;
}

console.log(moyenne);

*/

//