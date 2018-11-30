//VARIABLES :

/*
var num = 10;

var chiffre = 0;

console.log(chiffre + num);

chiffre = 10;

console.log(chiffre + num)
*/

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

//BOOLEANS

/* TRUE / FALSE */

/*
console.log(2 == 2); //true
console.log(2 == 1); //false
var a = 1;
var b = 2;
console.log(a = b); //false
console.log(a != b); //true (!= : different)
*/

//CONDITION

/*
console.log(a == b ? "vrai" : "faux"); // "?" : question ":" : sinon
*/

// superieur et inferieur

/*
var age = 19;
var majeur = 18;
console.log(age <= majeur ? "Ok entre !" : "Sors de là !");
*/

// OU / ET

/*
console.log(1 == 1 && 1 == 2); //false car il y en a un de faux
console.log(1 == 1 && 1 == 1); //true
console.log(1 == 1 || 1 == 1); //true
console.log(1 == 1 || 1 == 2); //true car il y en a qu'un de vrai
console.log(1 == 1 && 1 < 2 ? "OK" : "Pas OK"); //true
*/

// STRICT

/*
console.log(1 === "1"); //false
console.log(1 !== 1); //false
*/

// IF / ELSE

/*
function esTuFort(force) {
    if (force >= 15) {
        return "Tu es très fort";
    }
    else if (force >= 10) {
        return "Tu es fort";
    }
    else if (force >= 5) {
        return "Tu es faible";
    }
    else {
        return "Non";
    }
}
console.log(esTuFort(12));
*/

//Exo 3.

/*
function niveau(arr) {
    var moyenne = (arr[0] + arr[1] + arr[2]) / arr.length;
    if (moyenne >= 15) {
        return "Très bien ! Votre moyenne est de " + moyenne;
    }
    else if (moyenne >= 10) {
        return "Bien ! Votre moyenne est de " + moyenne;
    }
    return "Convocation des parents ! Votre moyenne est de " + moyenne;
}
console.log(niveau([12, 8, 16]));
*/

//OBJETS

/*
var chevalier = {
    "force": 15,
    "vitesse": 5,
    "faiblesse": ["mage","ninja"],
    "compagnon": {
        "animal": "chien",
        "aide": "écuyer"
    }
};
chevalier.force = 20;
chevalier.arme = "épée";
delete chevalier.arme; //il a perdu/cassé son arme.
var requete = "force";
console.log(chevalier.hasOwnProperty("arme")); //savoir si il a une arme
console.log(chevalier.compagnon.aide);
/*

//EXEMPLE RECETTES

/*
var recettes = {
    "recette1": {
        "ingredients": [],
        "nom": "ma recette de tout les jours",
        "cuisson": 15
    },
    "recette2": {
        "ingredients": [],
        "nom": "ma recette favoris",
        "cuisson": 30
    }
}
*/

//BOUCLE WHILE

/*
var i = 0;
var triangle = [];

while(i < 10) {
    i++;
    triangle.push("#");
    console.log(triangle);
    
}
*/

//BOUCLE FOR

/*
var triangle = [];
for(var i = 10; i >= 0; i -= 4) {
    triangle.push("#")
    console.log(triangle);
}
*/

//BOUCLE FOR (SUITE)

/*
var arr = [10, 5, 15, 7, 4];
var total = 0;
for (var i = 0; i < arr.length; i++) {
    total += arr[i];
}
console.log(total);
*/

//Exo 4

/*
function moyenne(arr) {
    var arr = [15, 7, 8, 14];
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}
console.log(moyenne([15, 7, 8, 14, 7]));
*/

// BOUCLE DANS UNE BOUCLE

/*
function plusUn(arr) {
    for(var i = 0; i < arr.length, i++) {
        for(var j = 0; j < arr[i].length; j++) {
            arr[i][j] += 1;
        }
    }
    return arr;
}
console.log(plusUn([[1,2],[3,4],[5,6]]));
*/

// GENERER UN NOMBRE ALEATOIRE

/*
var random = Math.random() * 5; //maxi 4.99999...
console.log(random);
*/

/*
var random = Math.floor(Math.random() * 6); // de 0 à 5
console.log(random);

var random = Math.floor(Math.random() * 6 + 1); // de 1 à 6
console.log(random);
*/

// DANS UN RANG

/*
function rangRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //du minimum au maximum de 5 à 10
}
console.log(rangRandom(5, 10));
*/

//MELANGER UN ARRAY
//c'est comme mélanger des cartes


/*
function randomize(arr) {
    var temp = 0;
    var random = 0;

    for (var i = 0; i < arr.length; i++) {
        random = Math.floor(Math.random() * arr.length);
        temp = arr[i];
        arr[i] = arr[random];
        arr[random] = temp;
    }
    return arr;
}
console.log(randomize([1,2,3,4,5]));
*/

//METHODE MAP

/*
var arr = [1, 2, 3, 4, 5];
var  arrPlusUn = arr.map(function(nombre) {
    return nombre + 1;
});
console.log(arrPlusUn);
*/

