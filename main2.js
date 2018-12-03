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

const arme "épée";

const perso = {
    nom: "John Snow",
    force: 15,
    arme : "épée"
};

// si je veux modifié le nom :

perso.nom = "peter";

 