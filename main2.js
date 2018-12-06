/////////          ES6 ES7         /////////

//Probleme de var

/*
var arme = "épée";
console.log(arme);

var arme = "lance";
console.log(arme);
*/

//Block VS Function scope

/*
var arme "épée";

if (arme == "épée") {
    var force = 15; //let force = 15; uniquement en block 
}

console.log(force);
*/

/*
choixArme ();

function choixArme(){
    console.log(arme);
}
*/

//let & const

/*
let arme = "épée";
const nom = "John Snow";
//let arme = "lance"; //arme a déjà été déclaré ,c'est pour eviter de faire l'erreur
if (arme == "épée") {
    const force = 15;
    let arme = "lance";
    console.log(arme);
}
console.log(arme);
*/

/*
const arme = "épée";
arme = "lance" //ne se changera pas
const nom = "John Snow"
nom = "peter"; //ne se changera pas
if (arme == "épée") {
    const force = 15;
}
console.log(arme);
*/
/*
const arme "épée";

const perso = {
    nom: "John Snow",
    force: 15,
    arme : "épée"
};

// si je veux modifié le nom :

perso.nom = "peter";

*/
 // const est propre et precis
 // pour une variable qui sera eventuellement changée souvent on peux utilisé "let"

 // 1. Const par defaut
 // 2. let si besoin  de MAJ
 // 3. plus jamais le var


 //TEMPLATES STRINGS

 /*
 const perso = {
     nom: "John Snow",
     force: 15,
     arme: "épée"
 };
 // const texte = perso.nom + " a une force de " + perso.force + " et une " + perso.arme + ".";
 const texte = `${perso.nom} a une force de ${perso.force} et une ${perso.arme}.`;
 console.log(texte);
*/

// cas pratiques avec les templates strings
/*
const perso = {
    nom: "Jon Snow", 
    force: 15,
    arme: "épée",
};

const texte = `${perso.nom ? perso.nom : "Angie"} est mon nom. `;//pour voir si mon nom existe ":" sinon 

console.log(texte);
*/
// je peux aller à la ligne avec les ``

//LES FONCTIONS FLECHEES


// const arr = [1, 2, 3, 4, 5];

/*
const arrPlusUn = arr.map(function(nombre) {
    return `${nombre} + 1 = ${nombre + 1}`;
});
*/
/*
const arrPlusUn = arr.map((nombre) => {
    return `${nombre} + 1 = ${nombre + 1}`;
});
*/
/*
const arrPlusUn = arr.map(nombre => {
    return `${nombre} + 1 = ${nombre + 1}`;
});
*/
/*
const arrPlusUn = arr.map(nombre => `${nombre} + 1 = ${nombre + 1}`);
*/
/*
const arrPlusUn = arr.map(() => `5`);
*/

//console.log(arrPlusUn);

/*
const arrPlusUn = arr.map(() => `5`);
const maFonction = () => console.log("Coucou");

maFonction();

console.log(arrPlusUn);
*/

//Paramètres par defaut dans une fonction

/*
function disMonNom(nom = "No Name") {
    console.log(nom);   
}
disMonNom("Angie");
*/

//DESTRUCTURING AVEC UN OBJET
/*
const joueur = {
    nom: "John",
    type: "Chevalier",
    arme: "Epée"
}
const { nom, type: genre, arme = "Lance" } = joueur;
console.log(nom, type, arme);
*/

//DESTRUCTURING D'ARRAY
/*
const stats = [154, 12, 78, 28, 54, 54];
const [ attaque, defense, vitesse, magie ] = stats;
console.log(attaque, defense, vitesse, magie);
*/

//INTERVERTIR DES VALEURS
/*
let maCarte = "Dracaufeu" ;
let taCarte = "Rattata";
//let temp = maCarte;
//maCarte = taCarte;
//taCarte = temp;
[maCarte, taCarte] = [taCarte, maCarte];
console.log(maCarte, taCarte);
*/

//MELANGER UN ARRAY ES6
/*
function randomize(arr) {
    let temp = 0;
    let random = 0;

    for(var i = 0; i < arr.length; i++) {
        random = Math.floor(Math.random() + arr.length);
        temp = arr[i];
        arr[i] = arr[random];
        arr[random] = temp;
    }
    return arr;
}

console.log(randomize([1, 2, 3, 4, 5]));
*/

function randomize(arr) {
    for (var i = 0; i < arr.length; i++) {
        const random = Math.floor(Math.random() * arr.length);
        [arr[i], arr[random]] = [arr[random], arr[i]];
    }
    return arr;
}

console.log(randomize([1, 2, 3, 4, 5]));